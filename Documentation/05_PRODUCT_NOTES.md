# Found the Word — Product Notes

Working observations, usability findings, and potential improvements discovered during development and testing.

These are not automatically approved product requirements. Items may be implemented, revised, rejected, or promoted into DECISIONS.md as the product develops.

## Interface

### Result density on desktop

**Status:** Future iteration

The initial static MVP uses more vertical space than the amount of displayed information warrants.

The result should be easier to scan as a whole on a typical desktop viewport, with less unnecessary scrolling.

Potential areas to evaluate:

* Vertical spacing between sections
* Search-area height
* Result-section spacing
* Alternative-word spacing
* Overall information density

Preserve readability and the quiet reference-tool aesthetic rather than making the interface feel compressed.

### Mobile layout

**Status:** Needs testing

Evaluate the search and result interface on mobile-sized viewports before considering the static MVP complete.

Check:

* readability
* input sizing
* button placement
* result hierarchy
* alternative-word layout
* feedback controls
* unnecessary horizontal or vertical space



Static MVP testing observations:



\- Desktop layout uses excessive vertical spacing relative to content volume.

\- Change "Explanation" to "Definition."

\- Add subtle section separation between Definition, Why it fits, and Alternatives.

\- Increase feedback-button size and touch targets.

\- Add an understated request for feedback explaining that feedback improves future results.

\- Current responsive behavior tested successfully on mobile-sized viewport and rotation.

\- Preserve the existing hierarchy, restrained visual style, and alternative-word separation.

### Search textarea keyboard behavior

**Status:** Future iteration

Enter should eventually submit the search.

Shift+Enter should insert a newline.

Current behavior requires clicking the Search button because Enter inserts a newline.

