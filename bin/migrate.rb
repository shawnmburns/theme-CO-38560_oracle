require 'optparse'
require 'fileutils'
require 'rake'


@ignoreClient = ["tru", "meen", "frst", "nova"]

options = {}
OptionParser.new do |opts|
    opts.banner = "Usage: migrate.rb [-c CLIENT] [-l LOCALE]"

      opts.on("-c", "--client CLIENT", String, "client to migrate") do |c|
        options[:client] = c
      end
      opts.on("-l", "--locale LOCALE", String, "locale") do |l|
        options[:locale] = l
      end
      opts.on("-r", "--remove", "remove assets dir") do |r|
        options[:remove] = r
      end
end.parse!

def removeAssets(clientCode,locale)
  dir = "/opt/pose/theme/#{locale}/#{clientCode}/assets"
  puts "dir: #{dir}"
  FileUtils.rm_rf dir
end

def migrateClient(clientCode,locale)

  # copy assets
  from_dir = "/opt/pose/clients/#{clientCode}/src/main/resources/clientconfig/clients/#{clientCode}/ei/assets"
  #from_dir = "/opt/pose/implementation/seamless/#{clientCode}"
  to_dir = "/opt/pose/theme/#{locale}/#{clientCode}"
  FileUtils.mkdir_p to_dir unless File.exists? to_dir
  #copy everything except .svn
  puts `rsync -arvz #{from_dir} #{to_dir}/theme --exclude=".svn"`

  # create assembly.xml
  assembly_file = File.read("assembly.xml.template")
  assembly_file.gsub!(/<CLIENT>/, clientCode)
  assembly_file.gsub!(/<LOCALE>/, locale)
  File.write("#{to_dir}/assembly.xml", assembly_file)
  # create pom.xml
  pom_file = File.read("pom.xml.template")
  pom_file.gsub!(/<CLIENT>/, clientCode)
  File.write("#{to_dir}/pom.xml", pom_file)
end

def processClient(client)
  (@ignoreClient.include? client) ? false : true
end

if options[:client] != nil 
    if options[:remove]
      removeAssets options[:client], options[:locale] 
    else
      migrateClient options[:client], options[:locale]
    end
else
  clients = `svn ls $R/main/clients`
  puts clients
  clients.split(/\n/).each do |client|
    clientCode = client.chomp("/")
    puts clientCode
    if options[:remove]
      removeAssets clientCode, 'en_us'
    elsif processClient clientCode
      migrateClient clientCode, 'en_us'
    end
  end
end
