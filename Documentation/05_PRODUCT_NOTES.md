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

### Selectable alternative words

**Status:** Next planned MVP improvement

The intended target appeared somewhere among bestWord plus the three alternatives in 95% of the 40 post-revision evaluation tests.

Users may recognize their intended word immediately among Alternatives. The next product-design task should investigate making alternative words directly selectable as successful answers.

For example, if bestWord is Vambrace but the user recognizes Bracer under Alternatives, selecting Bracer could directly register "That's it" without another model request or clarification question.

This should be part of an eventual interaction hierarchy in which recognition of an already-returned candidate is preferred over unnecessary additional inference.

This behavior is not yet implemented.

### Lexical-family and morphological-form retrieval

**Status:** Ongoing product observation

Testing has repeatedly shown that lexical-family retrieval is stronger than exact morphological or grammatical-form ranking.

Observed relationships include:

* ambivalent / ambivalence
* congruity / congruous / congruent
* expository / exposit
* zeal / zealous
* pendulous / pendulum
* flog / flogging
* drowse / drowsing

Preserve the distinction between strict exact-target evaluation and practical product success.

A related grammatical form may fail exact-string evaluation while still triggering the user's intended "AHA" recognition.

