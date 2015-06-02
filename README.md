Astro Client Themes 
=====

## Description
Repository of client specific Astro themes.  Includes client logos and client.css that used to live in the client jars, as well as seamless theme assets.

## Project Layout
### Locale
Clients are organized by locale.  
For instance **FRST** is located under `en_gb` and **AEPO** is located under `en_us`.

### Client
Each client theme directory has the following files/directories:

* **theme** - Directory containing all theme assets.  
Only files located in the *theme* directory are packaged up.
* **assembly.xml** - Maven assembly file containing the `outputDirectory` within the created jar file.  
The output directory must include the client's locale
* **pom.xml** - Maven pom file containing the client's artifactId and version

## Adding a new client theme
1.  Create a client directory under the appropriate locale
2.  Create a directory named `theme` under the client directory and place all theme assets there
3.  Create/copy a `pom.xml` and `assembly.xml` into the client directory
4.  Modify the `pom.xml` with the appropriate artifactId, version, and name
5.  Modify the assembly.xml with the proper `outputDirectory` using the format of `locale/clientCode`
6.  Run `mvn clean install` to ensure that your project builds
7.  Use `jar -tf <path to jar>` to verify that the contents of the file are correct

**NOTE:** You may use the template `pom.xml.template` and `assembly.xml.template` files under the `bin` directory.  You will need to replace `<CLIENT>` and `<LOCALE>` with the appropriate values.

## Release Instructions
1.  Navigate to your client's directory in the theme repository (e.g. en_us/bgec-test)
2.  Run `mvn release:prepare && mvn release:perform`
3.  Standard questions should be straightforward and probably do not need to deviate from the default

## Build Script
`build.sh` is a simple bash script for building all the pom.xml files under its executing directory.

e.g. 

To build all clients under all locales call `./build.sh`

To build all clients under en_gb, call`cd en_gb && ../build.sh`

To build and deploy, use `./build.sh deploy`  
**Note:** This only deploys the jar into Nexus and not necessarily the app server.

## Migration Script
Initial migration script for copying over all existing client jar assets into this new repository.
Instructions for usage can be found in `bin/README`
