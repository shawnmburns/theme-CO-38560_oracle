if (document.title === "CLP – My Energy Use") {
    document.title = "CLP – Consumption History";
}

$(function() {

  // make sure that clicks on the included image trigger click event on parent <a> tag
  $('.btn-language').click(function() {
    this.parentNode.click();
    return false;
  });

  // hide fireplace, solar, heating system, and heating fuel from "About My Home" form
  $("label[for='fireplace']").parent().hide();
  $("label[for='photoVoltaic']").parent().hide();
  $("label[for='heatMech']").parent().hide();
  $("label[for='heatType']").parent().hide();

  // hide "Fuel type: electricity"
  $("#fuelTypeAndUtilityAccountSelectors").hide();
 
  // add disclaimer text to general tips page.
  if (($("a.active").attr('href') === '/ei/app/ideas/free') && ($(".tip-detail-sidebar").length == 0)) {
    var language = $("html").attr("lang");
    var disclaimer;
    if (language === "en-HK") {
      disclaimer = "The above saving is estimated based on CLP’s market research and consumption patterns of various households which might differ from your actual saving amount."
    }
    else if (language === "zh-HK") {
      disclaimer = "以上電費節省金額是基於本公司調查數據及不同客戶之用電情況訂出，與　閣下之實際節省開支或有所不同。"
    }
    var disclaimerDiv = $("<div class='disclaimerDiv tips-disclaimer darkGray small'>").text(disclaimer);
    $("#content").append(disclaimerDiv);
  }

  $("html").css("display", "table");
  // Add strong tags to...
  setTimeout(function() {
    // ..."Your Household" in neighbor comparison graph
    strongify(".barLabel_container div", /Your Household/);
 
    // ..."您的家居" in neighbor comparison grapoh
    strongify(".barLabel_container div", /您的家居/);
 
    // ..."nn% LESS" or "nn% MORE" in neighbor comparison graph title
    strongify(".percentage", /(\S+ (MORE|LESS))/);

    // ...chinese version
    strongify(".percentage", /([多少][\s\d%]+)/)

    // ..."HK$xx" in all tips
    strongify(".savings-text", /(HK\$\d+)/);

    // remove click handler and make this a normal link
    $(".myHomeCharacteristicsLink").off("click").attr('href','/ei/app/s/myhome').on("click", function(e) { location.href="/ei/app/s/myhome"; e.preventDefault() });
  }, 0);

  // given a jQuery selector and a regular expression,
  // put <strong> tags around all regex matches within the 
  // jQuery-matched HTML elements
  function strongify(selector, regex) {
    $(selector).each(function() {
      var original_html = $(this).html();
      var new_html = original_html.replace(regex, "<strong>$&</strong>");
      $(this).html(new_html);
    });
  } 
});