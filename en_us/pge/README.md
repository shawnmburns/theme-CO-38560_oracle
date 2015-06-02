# Release notes

## 4.0.0
* Restoring x-web dashboard page
* Adding new Solar Summary tab for NEMS solar customers

## 3.0.0
*Hotfix rollback to non x-web pages due to SYS-16239*
Due to CSS and displayCriteria changes a fresh version is needed to roll back from x-web to Astro for dashboard / bill compare.

## 2.4.0
* Astro version Support: 4.5+
* Switching all tabs in tabs.json to new "display criteria" style (WEB-2973, WEB-2692).

## 2.3.0
* Astro Version Support: 4.10+
* Provides overrides to prevent changes from WEB-2167 (Add non-color-based-cues for links) from affecting theme chrome.

## 2.2.0
* Points to x-web for the dashboard.
* *¡THIS VERSION MUST BE DEPLOYED ALONGSIDE ASTRO 4.9, BECAUSE ASTRO CONTAINS NECESSARY API CHANGES WHICH X-WEB REQUIRES!*

## 2.0.2
* *¡THIS VERSION MUST BE DEPLOYED ALONGSIDE ASTRO 4.9, BECAUSE ASTRO CONTAINS CHANGES WHICH BREAK THE THEME!*
* Updates overrides to properly handle CSS/DOM changes related to the new mechanism that includes top level headings for
    seamless themes that require them (WEB-2185).

## 2.0.1
* *¡THIS VERSION MUST BE DEPLOYED ALONGSIDE ASTRO 4.8, BECAUSE ASTRO CONTAINS CHANGES WHICH BREAK THE THEME!*
* Updates based on Astro changes: the "fuelTypeAndUtilityAccountSelectors" heading is now an h1 instead of an h3 on the
    Compare My Bills (WEB-2188) and My Energy Use (WEB-2186) pages.

## 2.0
* Renamed the "optionalPageHeading" CSS class to "optionalPageTitle" (WEB-2183)
* Removed the "#page-questionnaire" CSS rule, since it pertains to the legacy audit which PGE no longer has

## 1.2
*¡this version requires Astro 4.4.1 or later!*

### 1.2.1
* Changed url for bill compare from "widget-bill-compare" to "compare-my-bills"

### 1.2.0
* Updated bill compare to use the new x-web. 
* first use of the new `serverRelativeUrl` attribute added into astro.
