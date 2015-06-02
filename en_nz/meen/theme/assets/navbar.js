/*
CO-31767 - Remove certain tabs for SMB customers

The original MEEN seamless theme had 2 navbars -
  1. The top level nav bar (Account, GEM, etc..). This used the tabs.json setup
  2. The Opower tab nav (Compare Bills, My Goal, etc..). This used hard-coded HTML

As part of enabling SMB functionality (CO-31557), the requirement was to
  -> Hide "What Uses Most" tab for ONLY SMB customers

Tabs can be hidden via the in-built tabs.json functionality that limits display
based on CUSTOMER_TYPE. But that means the Opower Nav tab (Item #2) would have to
use the tabs.json configuration and the top level navbar would have to be hard-coded instead,
since multiple tabs.json files are not possible at this time.

The top-level navbar also makes use of the {{active}}...{{/active}} tags to set certain
class values for the CSS elements. This now has to be re-done outside of the tabs.json file

Also, the Opower tabs navbar makes use of setting certain class and id attributes to each
li > a element. Ideally these would be custom key/value pairs in the tabs.json file as the
wiki claims, but looks like the app actually throws an error when any non-standard key/value
pairs are used. The workaround is to set the id attribute to something available via tabs.json
like {{pageName}} (class was hard-coded since all are the same value). Then we could go back
after the document loaded using JQuery and select thsoe id's and replace them as necessary.

So, combining all the above shit together, we can make the following changes to the seamless
theme -

  1. body.html - Replace the top-level navbar with hard-coded html.
     navbar.js - Use very specific id's for the list elements that we can
                 select via JQuery and set as "active" or "inactive" depending
                 on what page we are on

  2. body.html - Replace the Opower tab navbar with a tabs.json {{navbar}}
                 implementation, using {{label}} temporarily for the id attribute
     navbar.js - Replace each {{label}} for each list element with the correct
                 required value using JQuery

  Each of these two changes are noted in comments below

@author: abhishek
*/

$(document).ready(function () {

    //  #1 - Set active/inactive for the top level nabar based on what page
    //  we are on
    if (window.location.href.indexOf('dashboard') > -1) {
        $("li#navbar_dashbaord").addClass("current");
        $("a#navbar_dashbaord").addClass("on");
    }

    if (window.location.href.indexOf('ideas') > -1) {
        $("li#navbar_ideas").addClass("current");
        $("a#navbar_ideas").addClass("on");
    }


    //  #2 - Replace the {{label}} placeholder for the id attributes of the
    //  Opower tab navbar li > a elements
    $('div.secondary-nav ul.subnav-list li a').each(function(){
      if(this.id == "dashboard") {
        this.id = "overview-link";
      }

      if(this.id == "myEnergyUse") {
        this.id = "usage-link";
      }

      if(this.id == "whatUsesMost/") {
        this.id = "piechart-link";
      }

      if(this.id == "compareMyBills") {
        this.id = "bill-link";
      }

      if(this.id == "myGoal") {
        this.id = "goal-link";
      }

      if(this.id == "ideas") {
        this.id = "ideas-link";
      }

      if(this.id == "myPlan") {
        this.id = "plan-link";
      }
    });
});
