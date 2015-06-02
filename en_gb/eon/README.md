# Release notes

## 3.0.2
* Move 'What Uses Most' to a main tab

## 3.0.1
* Update eon and opower copyright years to load current year with JS or fallback to 2015 when no JS is used

## 3.0.0
* Pointed dashboard and bill compare to x-web versions (CO-33306)

## 2.5.0
* Reverted x-web tabs

## 2.4.1
* Astro version Support: 4.11+
* Minor overrides.css change to fix the close button shown in the questionnaire's top tip modal.  Original 2.2.0 release with
* this fix still had a quirk. (WEB-2970).

## 2.4.0
* Astro version Support: 4.5+
* Switching all tabs in tabs.json to new "display criteria" style (WEB-2973, WEB-2692).

## 2.3.0
* points to x-web for the dashboard.
* *¡THIS VERSION MUST BE DEPLOYED ALONGSIDE >= ASTRO 4.9, BECAUSE ASTRO CONTAINS NECESSARY API CHANGES WHICH X-WEB REQUIRES!*

## 2.2.0
* Astro Version Support: 4.11+
* Fixes the close button shown in the questionnaire's top tips modal.  Uses a close button stylized per EON's icon toolset.

## 2.1.0
* Astro Version Support: 4.10+
* Provides overrides to prevent changes from WEB-2167 (Add non-color-based-cues for links) from affecting theme chrome.

## 2.0
* *¡THIS VERSION MUST BE DEPLOYED ALONGSIDE ASTRO 4.8, BECAUSE ASTRO CONTAINS CHANGES WHICH BREAK THE THEME!*
* Updated CSS heading selector for Ways to Save page, because of corresponding change to HTML in Astro (WEB-2191)
