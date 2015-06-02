
// not used just yet. pulled from CLP's site.

var adjIndex = 0;
var adjIndexMin = -2;
var adjIndexMax = 2;
var differencepx = 1;

    

function changeFontSize(inc){
  var needChange = false;
  
  var adjIndexTemp = adjIndex;
  
  adjIndexTemp+=inc;
  
  if (adjIndexTemp >= adjIndexMin && adjIndexTemp <= adjIndexMax) {
    adjIndex = adjIndexTemp;
    needChange = true;
  }
  
  
  if (needChange){

    var styleSheets   = document.styleSheets;
    var noOfStyleSheets = document.styleSheets.length;

    for (i=0;i<noOfStyleSheets;i++){
      found = false;
      if (styleSheets[i].cssRules){
        theRules = document.styleSheets[i].cssRules;  
        found = true;
      }else{
        if (styleSheets[i].rules){
          theRules = document.styleSheets[i].rules;
          found = true;
        }
      }
      if (found){
        noOfRules = theRules.length;
        for (j=0;j<noOfRules;j++){
          if (!theRules[j].style) {
            continue;
          }
          originalFontSize = parseFloat(theRules[j].style.fontSize);
          if (!isNaN(originalFontSize)){
            newFontSize = originalFontSize + (differencepx*(inc));
            theRules[j].style.fontSize = newFontSize;       
          }

        }
      }
    }   
    // setCookie("adjIndex", adjIndex , 2);
  }
}  

