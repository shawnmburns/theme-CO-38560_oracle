# Release notes

## WARNING
* Be sure to cut a stage-specific tag for bgec stage with stage-specific urls.
* These urls can be found in the branch "bgec_stage_specific_urls" and pulled
* into your development branch with:
*  git checkout bgec_stage_specific_urls en_us/bgec/theme/body.html

## 1.3.0
* Astro version Support: 4.5+
* Switching all tabs in tabs.json to new "display criteria" style (WEB-2973, WEB-2692).

## 1.2.0
* *¡THIS VERSION MUST BE DEPLOYED ALONGSIDE ASTRO 4.9, BECAUSE ASTRO CONTAINS CHANGES WHICH BREAK THE THEME!*
* Updates overrides to properly handle CSS/DOM changes related to the new mechanism that includes top level headings for
    seamless themes that require them (WEB-2185).
