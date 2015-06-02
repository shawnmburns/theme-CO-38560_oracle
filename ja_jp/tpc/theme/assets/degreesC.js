
// only run this when the page finishes loading
$(document).ready(function () {
   jQuery( ".page-myEnergyUse-data-type-weather .module-utility_account__energy-graph .elroi .y-ticks.y2 li:not(:last-of-type)" ).each (
        function () {
            var str = $( this ).text().replace( " °", "" );
            console.log('String is ' + str)
            $( this ).text( str );
        }
   )
});
