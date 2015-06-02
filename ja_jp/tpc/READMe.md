# Release notes

## 1.2.0
* Astro Version Support: 4.10+
* Provides overrides to prevent changes from WEB-2167 (Add non-color-based-cues for links) from affecting theme chrome.

## 1.1.0
* Astro Version Support: 4.9+
* Reverts 4.8 specific changes overrides that were required as a work around to get labels in Elroi to show up at the desired
*   12px.  Astro  was using smaller fonts (9px) for Japanese as a workaround for an issues whose root cause has been addressed
*   -- and now correctly will use the default font-size for Elroi labels. (WEB-2895).

## 1.0.11
*  Astro Version Support: 4.8
*  Initial TEPCO theme release.