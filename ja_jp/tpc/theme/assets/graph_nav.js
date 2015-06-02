// Commands to control
//   1. The conditional display of the orange and green sub-nav graph nav on certain pages
//   2. The mousover functionality of the orange and green boxes


// only run this when the page finishes loading
$(document).ready(function () {
    // if any of these pages are active exists in the url
    if (window.location.href.indexOf('dashboard') > -1 ||
        window.location.href.indexOf('myEnergyUse') > -1 ||
        window.location.href.indexOf('compareMyBills') > -1 ||
        window.location.href.indexOf('myGoal') > -1) {
        // select the div by its id and make sure it's visible
        $('#conditional_orange_tab').css('visibility', 'visible');

        // Change the background color of the active tab as needed
        if (window.location.href.indexOf('dashboard') > -1) { $('#orange_1').css('background-color', 'white') }
        if (window.location.href.indexOf('myEnergyUse') > -1) { $('#orange_2').css('background-color', 'white') }
        if (window.location.href.indexOf('compareMyBills') > -1) { $('#orange_3').css('background-color', 'white') }
        if (window.location.href.indexOf('myGoal') > -1) { $('#orange_4').css('background-color', 'white') }

        // Set navi03 image to the "active" version, which itself has an "on" and "off" version
        // This hackery is done to avoid further fucking with already custom logic in rollover.js
        var image = document.getElementById('navi03_image')
        var imgSrc = image.src;
        var sep = imgSrc.lastIndexOf('nav03') + 5;
        var newSrc = imgSrc.substr(0, sep) + '_active' + imgSrc.substr(sep, 100);
        image.src = newSrc;
    }
    else {
        // select the div by its id and make sure it's hidden and doesn't take up space
        $('#conditional_orange_tab').css('visibility', 'hidden');
        $('#conditional_orange_tab').css('display', 'none');
    }

    // if any of these pages are active exists in the url
    if (window.location.href.indexOf('ideas') > -1 ||
        window.location.href.indexOf('myPlan') > -1) {
        // select the div by its id and make sure it's visible
        $('#conditional_green_tab').css('visibility', 'visible');

        // Change the background color of the active tab as needed
        if (window.location.href.indexOf('ideas') > -1) { $('#green_1').css('background-color', 'white') }
        if (window.location.href.indexOf('myPlan') > -1) { $('#green_2').css('background-color', 'white') }

        // Set navi04 image to the "active" version, which itself has an "on" and "off" version
        // This hackery is done to avoid further fucking with already custom logic in rollover.js
        var image = document.getElementById('navi04_image')
        var imgSrc = image.src;
        var sep = imgSrc.lastIndexOf('nav04') + 5;
        var newSrc = imgSrc.substr(0, sep) + '_active' + imgSrc.substr(sep, 100);
        image.src = newSrc;
    }
    else {
        // select the div by its id and make sure it's hidden and doesn't take up space
        $('#conditional_green_tab').css('visibility', 'hidden');
        $('#conditional_green_tab').css('display', 'none');
    }
});
