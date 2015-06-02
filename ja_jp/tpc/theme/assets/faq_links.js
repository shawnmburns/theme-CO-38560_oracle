// CO-30444
// When the customer views the landing (which is rare because with SSO you can only get there
// by purposely navigating to 'tepco.opower.com') TEPCO wants the URL links on the side bar to
// point to their FAQ page instead of our default help page

// only run this when the page finishes loading
$(document).ready(function () {
    // Set the FAQ URL
    tpc_faq_page = "https://www.kakeibo.tepco.co.jp/inquiryFaq.html"

    // Override the first link
    // Original URL: /ei/app/help.html#NEIGHBORS_IN_REPORT_FAQ1
    $('#page-home div #about-reports ul li:first-child a.clearfix').attr('href', tpc_faq_page);

    // Override the second link
    // Original URL: /ei/app/help.html
    $('#page-home div #about-reports ul li:last-child a.help-link').attr('href', tpc_faq_page);
});
