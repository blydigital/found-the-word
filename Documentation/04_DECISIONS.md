Whats the Word / Find the Word



**DECISIONS**



001 - Brand is "What's the Word?"



002 - Domain is FoundTheWord.com



003 - North Star Metric is "% That's It clicks"



004 - No user accounts in MVP



005 - Search-first experience, conversation only when needed



006 - Generated GitHub: github.com/blydigital/found-the-word



007 - Vercel: Created an account and connected GitHub \& found-the-word



008 - Supabase: Created project found-the-word for database/backend use



009 - Created FoundtheWord Folder on Laptop



010 - OpenAI API Key Created and Stored securely



&#x09;	OpenAI API



&#x09;	Development Key



&#x09;	Created:

&#x09;	August 2026



&#x09;	Purpose:

&#x09;	Found the Word



011 - Developed 01_Founder_Specification_v1.md



012 - Outlined Documentation:

&#x09;Documentation/

&#x09;│

&#x09;├── 01_Founder_Specification_v1.md

&#x09;├── 02\_Engineering\_Principles.md

&#x09;├── 03\_Product\_Roadmap.md

&#x09;├── 04\_Decisions.md

&#x09;├── 05\_Prompt\_Standards.md

&#x09;├── 06\_Architecture.md

&#x09;└── 07\_Changelog.md



013 - Architecture and core technology stack established

&#x09;	Our stack is now fixed:



&#x09;	Component	-	Tool

&#x09;	Code Editor	-	Cursor

&#x09;	Version Control	-	Git + GitHub

&#x09;	Framework	-	Next.js

&#x09;	Deployment	-	Vercel

&#x09;	Database	-	Supabase

&#x09;	AI		-	OpenAI Responses API



014 - Cursor established as the primary IDE and local development environment. Git, Node.js, Next.js, and the local repository were configured and verified. The working Next.js baseline runs locally and is pushed to GitHub.



015 - Establish Working Next.js Baseline and Version Control Workflow



&#x09;1. Generated the application using the official Next.js project generator.

&#x09;2. Used the recommended Next.js defaults:

&#x20; 		TypeScript

&#x20; 		ESLint

&#x20; 		Tailwind CSS

&#x20;		App Router

&#x20; 		React Compiler

&#x09;3. Removed the default Google-hosted Geist font dependency after it caused a local development error.

&#x09;4. Verified the application runs successfully at `localhost:3000`.

&#x09;5. Configured Git commit identity using the GitHub-provided private `noreply` email address.

&#x09;6. Committed the first working application baseline:

&#x20; 		`Generate Next.js application`

&#x09;7. Pushed the working baseline to the `main` branch of the GitHub `found-the-word` repository.

&#x09;8. Development principle established:

&#x20;		Test changes locally before committing.

&#x20; 		Commit known-working states.

&#x20; 		Push stable milestones to GitHub.



016 - Static MVP interface completed and validated

Replaced the default Next.js starter screen with the first Found the Word interface.
Established the core visual direction as minimal, quiet, professional, and reference-tool oriented.
Confirmed responsive behavior on desktop and mobile-sized viewports.
Confirmed portrait/landscape resizing behavior.
Established the result hierarchy:
Best word
Confidence
Definition
Why it fits
Alternatives
Feedback
Established large, separated feedback controls for "That's it" and "Not quite."
Added a short feedback prompt explaining that feedback helps improve future results.
Static interface passed lint and production build validation.
Committed and pushed as:
Build static MVP interface



017 - Product observations are tracked separately from product decisions

Documentation/05_PRODUCT_NOTES.md is the working location for usability findings, test observations, and potential improvements.
Product Notes are not automatically approved requirements.
Stable product or architecture choices may later be promoted into 04_DECISIONS.md.
AI agents are instructed to read Product Notes alongside the Founder Specification and Decisions before making product or UI changes.



018 - AI-assisted development workflow established

Cursor is used as the primary implementation agent.
AI agents must read project documentation before making meaningful changes.
Changes should be small, testable, and consistent with the Founder Specification.
Meaningful changes are tested locally before committing.
Known-working states are committed with descriptive Git messages and pushed to GitHub.



019 - First functional search architecture

The first real search flow will use:

User input
→ Next.js frontend
→ Next.js Route Handler
→ OpenAI Responses API
→ structured result
→ existing result interface

The browser will not call OpenAI directly.



020 - OpenAI API key remains server-side

Store the OpenAI development key as OPENAI_API_KEY.
Do not expose the key through client-side code.
Do not use a NEXT_PUBLIC_ prefix.
Do not commit API credentials to Git or GitHub.



021 - First search response uses a fixed structured result shape

The search endpoint should return:

bestWord
confidence
definition
whyItFits
exactly three alternatives
word
difference

The frontend should render this structured data rather than parsing freeform prose.



022 - Supabase is excluded from the first functional search milestone

Supabase will not be required to retrieve a word in Version 0.1.

The first functional milestone validates:

User description
→ OpenAI
→ useful word result

Supabase will be introduced afterward for search and feedback persistence.



023 - Clarifying-question flow is deferred until basic search works

The first functional search will always return its best result.

Low-confidence conversational refinement will be implemented only after the direct search path is working and testable.



024 - Three-batch lexical retrieval evaluation completed

Batch 1: Original retrieval instructions

20 tests
9/20 exact target retrievals = 45%
12/20 targets appeared as either bestWord or one of the three alternatives = 60%

The system was often optimizing for a semantically defensible answer rather than reconstructing the particular lexical item the user was trying to remember.

Additional observed issues included ranking between close candidates, grammatical-form inference, and confidence representing semantic fit more strongly than confidence in exact target identification.

Intervention after Batch 1

Revised SYSTEM_INSTRUCTIONS.
Explicitly optimized for reconstruction of the user's intended lexical item.
Broadened clue weighting across semantic, contextual, grammatical, domain, usage, register, and lexical-form evidence.
Made lexical-form clues strong evidence when supplied without requiring them.
Improved grammatical and lexical-form inference.
Preserved access to common, rare, formal, technical, literary, archaic, slang, and uncommon vocabulary without arbitrarily favoring any category.
Redefined confidence as confidence that bestWord is the particular item the user is trying to recall rather than merely a semantically valid answer.

Batch 2: Revised retrieval instructions

20 tests
14/20 exact target retrievals = 70%
20/20 targets were surfaced in the returned candidate set = 100%

Remaining failures were predominantly ranking, morphological or grammatical-form, or legitimately ambiguous cases rather than broad vocabulary retrieval failures.

Batch 3: Untouched holdout using the same revised instructions

20 tests
15/20 exact target retrievals = 75%
18/20 targets were surfaced in the returned candidate set = 90%

No system-prompt changes were made between Batch 2 and Batch 3.

Post-revision aggregate

40 tests
29/40 exact target retrievals = 72.5%
38/40 intended targets surfaced somewhere among bestWord plus three alternatives = 95%



025 - Current one-shot lexical retrieval prompt is the validated baseline

The current one-shot lexical retrieval prompt should be frozen for now.

Do not continue prompt tuning against individual evaluation misses.

The remaining error pattern increasingly reflects ambiguity between plausible lexical candidates, ranking, and grammatical or morphological form rather than inability to retrieve relevant vocabulary.

Further improvement should investigate a tightly constrained clarification or refinement mechanism rather than continuing to expand the one-shot system prompt.



026 - Reactive clarification is the next retrieval experiment

The existing validated one-shot retrieval remains unchanged.

Clarification is triggered only when the user explicitly selects Not quite after the initial result.

Do not proactively interrupt the initial search based solely on a confidence threshold.

After Not quite, the system may ask exactly one targeted clarification question. The question should seek the single most useful missing clue for distinguishing among plausible lexical candidates.

Useful dimensions may include spelling fragments, beginning or ending letters, pronunciation or sound, syllables, grammatical form, context, register, technical domain, connotation, remembered morphology, single-word versus phrase, or a direct distinction between competing meanings.

These dimensions are examples, not a hard-coded questionnaire.

Avoid generic questions such as "Can you provide more information?" when a more discriminating question can be generated.

The clarification step must remain tightly constrained and must not become a general conversational chatbot.

Clarification context

The clarification operation should have access to:

the user's original description
the initial bestWord
the initial three alternatives
the fact that the user rejected the initial bestWord

The refinement search should have access to:

the original description
the previous candidates
the rejected bestWord
the clarification question
the user's clarification response

The refinement should return the existing structured SearchResult shape so the normal result interface can be reused.

For the MVP experiment, allow only one clarification cycle per initial search.

Do not implement persistence, accounts, conversation history, Supabase storage, or general chat.

Evaluation

Preserve the current one-shot retrieval baseline as a separate measurement.

Evaluate clarification using previously failed or ambiguous test cases. Add a metric measuring how often one clarification recovers the intended target.



027 - Imperfect input remains retrieval evidence

Users should not need to spell, type, or describe a word correctly in order for Found the Word to help them find it.

Typos, misspellings, transposed letters, missing punctuation, malformed grammar, phonetic approximations, incomplete fragments, and uncertain spellings may be useful evidence.

Do not require correctly written input. Do not add spell-checking, autocorrect, preprocessing, a correction interface, or a dependency for correcting user input.

Preserve imperfect lexical attempts because they may be among the strongest clues to the intended word.

Do not silently override explicit remembered lexical clues such as beginning or ending letters, spelling fragments, syllables, or sounds merely because they conflict with an otherwise plausible candidate.

Apparent contradictions and uncertainty should remain available as evidence for retrieval or clarification.



028 - Reactive clarification completed and validated

The implemented reactive clarification flow has been functionally validated.

Initial search remains unchanged.
Selecting Not quite generates one targeted clarification question.
The user's clarification response is used for one refinement retrieval.
The refined result reuses the existing SearchResult structure.
A second clarification cycle is not allowed.
A new initial search resets the clarification state.
Failed clarification or refinement requests can be retried without incorrectly consuming or creating another clarification cycle.
The implementation passed lint and production build validation.

Historical-miss retesting

Eleven misses from the previously validated Batch 2 and Batch 3 evaluations were replayed.

Seven of the eleven historical misses became visible among the initial result candidates on replay and did not require clarification.

Four cases still required clarification:

carking was recovered exactly
distensible was recovered exactly
congruity moved into the correct lexical family through congruous and congruent, but the exact target was not displayed
expository moved into the relevant lexical neighborhood through terms such as exposit, but the exact target was not recovered

These results are useful product evidence, not a statistically representative benchmark. Model outputs are nondeterministic, and the retest set intentionally consisted only of historical failures.

Imperfect-input robustness

A separate six-case robustness test intentionally used ordinary typos, phonetic approximations, misspellings, lexical fragments, malformed or fragmentary grammar, contradictory remembered clues, and severely messy but information-rich input.

Targets included ambivalent, perspicacious, surreptitious, intransigent, belligerent, and circumlocution.

The testing supported the product principle that users should not need to spell, type, or describe a word correctly for Found the Word to help retrieve it.

The system successfully used imperfect phonetic and lexical clues as evidence rather than requiring preprocessing or correction.

In the deliberately contradictory belligerent test, the initial result followed an incorrect remembered P clue. After Not quite, the clarification operation explicitly identified the conflict between that clue and the remembered sound and asked the user to resolve it. Refinement then surfaced belligerent among the alternatives.

This small targeted robustness test is not a general accuracy benchmark.



029 - Current retrieval instructions are frozen

Freeze the current one-shot retrieval instructions and the current clarification and refinement instructions for now.

Do not continue prompt tuning against individual misses at this stage.

Current evidence suggests that additional near-term product improvement is more likely to come from making better use of already-retrieved candidates than from repeatedly tuning prompts for ranking edge cases.

Prompt changes may be reconsidered if broader production evidence reveals a systematic failure worth addressing.



030 - Selectable Alternatives identified as the next planned MVP improvement

Testing repeatedly showed cases where the intended word was already visible among the three Alternatives even though bestWord was not the intended target.

From the user's perspective, seeing the intended word may already produce the desired "AHA" moment.

The next product-design task should investigate allowing the user to identify an Alternative directly as the intended word rather than requiring unnecessary clarification or another model request.

Recognition of an already-returned candidate should be preferred over unnecessary additional inference.

The product-design work was completed in Decision 031. Implementation and validation are recorded in Decision 032.



031 - Selectable Alternatives interaction designed

The result interface represents four candidate words:

bestWord
Alternative 1
Alternative 2
Alternative 3

Feedback semantics

Selecting That's it confirms that bestWord is the intended word.

Selecting an Alternative confirms that specific Alternative is the intended word.

Selecting Not quite means none of the four displayed candidates is the intended word and begins the existing reactive clarification flow.

Alternative words should be directly selectable.

Under the Alternatives heading, include concise instructional copy:

Select a word if it's the one you meant.

Keep this treatment understated and consistent with the existing utility-like interface. Do not turn every Alternative into a large visually dominant button.

Successful selection

Selecting either That's it for bestWord or an Alternative is a successful completion of the current search interaction.

On success:

visually identify the accepted word with a restrained success treatment such as a checkmark and That's it
show a concise thank-you message such as "Thanks for the feedback!"
do not open a modal
do not navigate to another page
do not invoke clarification
do not make another model request
do not promote an Alternative into the primary result presentation
do not reinterpret an Alternative's difference text as a definition or whyItFits explanation
remove the unresolved main feedback controls so one search has only one authoritative accepted outcome

Keep all result content and all Alternatives visible after success.

After success, Alternatives are no longer interactive.

Replace the unresolved main feedback area with this restrained completion state:

✓ That's it

Thanks for the feedback!

When an Alternative was selected, identify that Alternative in its existing row with a restrained ✓ That's it treatment. Do not remove the other Alternatives.

Apply the same successful-completion behavior to initial and refined results.

Clarification relationship

Selecting an Alternative before Not quite ends the interaction successfully and must not invoke clarification.

Selecting Not quite preserves the existing one-question reactive clarification flow.

After a refined result, the refined bestWord and refined Alternatives remain selectable as successful answers.

The existing one-clarification-cycle limit remains unchanged. Do not introduce a second Not quite path.

State semantics

No persistence or database work is included in this implementation.

Client-side state should distinguish conceptually between:

bestWord accepted
Alternative 1 accepted
Alternative 2 accepted
Alternative 3 accepted
none accepted, leading to clarification

This preserves useful future ranking-feedback semantics without implementing storage.

Implementation constraints

Do not modify retrieval, clarification, or refinement prompts.
Do not modify the SearchResult API schema.
Do not make another OpenAI request when an Alternative is selected.
Do not add Supabase, persistence, analytics, dependencies, or unrelated product behavior.
Preserve the existing clean, concise, professional interface.



032 - Validated lexical-product baseline established for Public MVP development

The current lexical interaction is the validated product baseline for Public MVP development.

The validated product supports:

free-form lexical descriptions
semantic clues
lexical-form clues
imperfect-input tolerance
one-shot bestWord retrieval
confidence
concise Definition
concise Why it fits
exactly three Alternatives
direct bestWord acceptance
direct Alternative acceptance
one bounded reactive clarification cycle after Not quite
refined candidate retrieval
successful bestWord or Alternative acceptance after refinement

Decision 031 has been implemented and manually validated.

Validated behavior includes:

main That's it acceptance
initial Alternative acceptance
continuation from Not quite into the bounded clarification flow
acceptance of refined bestWord and refined Alternatives
the approved successful-completion state and thank-you message
no additional model or API request when an Alternative is accepted
keyboard-accessible native button semantics for selectable Alternatives
desktop and mobile behavior

The validated selectable-Alternatives implementation checkpoint is:

`f4a9330 - Add selectable alternative feedback`

The validated retrieval, clarification, and refinement prompts remain frozen under Decisions 025 and 029.

Public MVP Production Readiness should wrap, protect, measure, deploy, and operate this validated lexical product.

Do not reopen lexical feature development or prompt tuning without evidence of a systematic retrieval problem.



033 - Public MVP Production Readiness established as the next major development objective

Release objective

"A public user can visit FoundTheWord.com, search safely and anonymously, receive the validated lexical experience, provide useful feedback, and leave, while Bly Digital Holdings can measure product performance, understand operating cost, detect failures or abuse, and place deliberate limits on financial exposure."

Governing financial principle

"Found the Word must know approximately what each successful retrieval costs, and abnormal usage must not have open-ended authority to spend Bly Digital Holdings' money."

Initial planning assumptions

The following are founder capital-allocation guardrails. They are initial planning assumptions, not permanent limits or hard-coded application requirements:

broader public-validation experiment envelope: approximately $500
initial automatic monthly operating authority: approximately $100–150
paid customer acquisition during initial public validation: $0

These assumptions may be deliberately revised based on legitimate traffic, measured product performance, actual operating costs, and product economics.

Do not implement these amounts as application behavior without a separate approved implementation decision.

Public MVP Production Readiness strategic framework

The following eight phases describe the strategic structure for moving Found the Word from the validated lexical-product baseline to controlled public deployment and subsequent evidence-driven optimization.

Phase 0 — Close the validated product baseline

Reconcile project documentation with the implemented and validated product.

Correct stale status information, record the current known-good implementation checkpoint, and establish the existing lexical interaction as the frozen baseline for production-readiness work.

Phase 0 is represented by Step 1 of the authoritative implementation roadmap. Decision 032 and the related Product Notes reconciliation complete this documentation step.

Phase 1 — Security, abuse prevention & financial guardrails

Protect the public-facing application, API routes, OpenAI usage, infrastructure, and Bly Digital Holdings' financial exposure before anonymous public use.

This phase includes:

threat modeling
financial guardrails
rate limiting
abuse controls
request protection
secrets review
cost containment
an emergency shutdown procedure

The goal is a defensible public-internet baseline with deliberately bounded financial exposure, not unlimited defensive complexity.

Phase 2 — Supabase product-learning system

Introduce the minimum secure persistence required to measure whether Found the Word works for real users.

Design the data model and privacy treatment before implementation.

Preserve the existing no-account product model.

Capture useful structured feedback semantics such as:

bestWord acceptance
Alternative 1 acceptance
Alternative 2 acceptance
Alternative 3 acceptance
rejection of the displayed candidate set
clarification use
refinement success
unresolved outcomes

Do not assume that all raw user text should be retained.

Determine the minimum data necessary for product learning before deciding whether original descriptions, clarification questions, clarification responses, returned words, or other potentially user-generated content should be stored.

Phase 3 — Cost telemetry & operational observability

Replace estimated economics with measured economics and establish sufficient operational visibility to understand:

API usage
token consumption
inference cost
latency
failures
rate-limit events
abnormal usage
product performance

Found the Word should eventually be able to estimate:

average inference cost per initial search
average inference cost per clarification and refinement cycle
average cost per completed session
cost per successful retrieval or That's it outcome

Operational observability should be sufficient to detect abnormal traffic, failures, or spending without building unnecessary enterprise-scale infrastructure.

Phase 4 — Privacy, legal & public-site trust layer

Determine privacy and legal requirements from the system's actual data practices rather than drafting policies before those practices are known.

Establish appropriate treatment of:

stored user text
structured usage data
retention
analytics
cookies where applicable
third-party processors
public privacy disclosures
terms
ownership information
related trust requirements

Complete the public-facing site shell required for a credible standalone utility, including appropriate:

FAQ or help content
Bly Digital Holdings ownership and footer treatment
metadata
accessibility review
polished error and loading states
final responsive presentation

The core search experience should remain clean, concise, and utility-like.

Phase 5 — Deployment pipeline & production validation

Move deliberately through:

local development
Vercel preview deployment
production validation
production deployment

Verify that the production environment preserves the validated lexical behavior while security controls, telemetry, persistence, financial controls, accessibility, mobile and desktop behavior, and safe failure handling work outside localhost.

Phase 6 — Controlled public launch

Connect FoundTheWord.com and expose the product to a deliberately limited initial real-user population.

The purpose is validation and measurement, not immediate scale.

Observe real-user:

retrieval success
bestWord acceptance
Alternative acceptance
clarification behavior
clarification recovery
unresolved searches
latency
failures
cost
abuse patterns

Do not initially purchase traffic simply to manufacture usage.

Phase 7 — Monetization and evidence-driven optimization

After meaningful real-user evidence exists, evaluate:

display advertising
model-cost optimization
prompt changes
growth spending

Advertising, model switching, prompt retuning, and paid customer acquisition should be justified by measured product behavior and economics rather than implemented speculatively before launch.

Monetization should not degrade the core lexical-retrieval experience.

Authoritative implementation roadmap

The eight phases describe where the product is in the overall Public MVP Production Readiness effort.

The following 14-step sequence defines what is executed next and is authoritative when determining execution order:

1. Documentation reconciliation
2. Threat model + financial guardrails
3. Security/rate limiting/abuse controls
4. Supabase data-design and privacy decision
5. Implement secure feedback/search telemetry
6. Implement API cost + operational telemetry
7. Privacy and legal requirements based on actual data practices
8. Finish public-site shell/FAQ/footer/metadata/accessibility
9. Vercel preview deployment
10. Production security and functional validation
11. Connect FoundTheWord.com
12. Controlled public launch
13. Measure real users
14. Only then evaluate ads, model-cost optimization, prompt changes, or growth spending

Preserve both the eight-phase strategic framework and the 14-step implementation roadmap.

Do not collapse the phase structure into the implementation sequence or replace the numbered implementation sequence with the phase structure.

Explicit deferrals

Public MVP Production Readiness does not authorize implementation of:

user accounts
subscriptions
saved user search history
community or social features
native mobile applications
browser extensions
writing integrations
a public API product
multilingual retrieval
image or drawing input
general-purpose chatbot behavior
unlimited clarification
speculative prompt retuning
model switching without comparative evidence
paid customer acquisition during initial validation
display-ad implementation before meaningful real usage and economics are measured

These remain future, separately approved, or evidence-triggered work.

The production-readiness roadmap is not permission to implement future-vision features.

Immediate next bounded work item

After Documentation Reconciliation, the next bounded work item is:

"Production Threat Model & Financial Guardrail Design"

This is Step 2 of the authoritative implementation roadmap.

It is a design and review task before implementation.

Its purpose is to:

identify every path by which an anonymous public user can trigger a paid operation or consume material resources
identify abuse and misuse paths
identify accidental resource-consumption paths
determine appropriate initial controls and thresholds
distinguish provider-level controls from application-level controls
determine what should happen when limits are reached
establish monitoring expectations
establish an emergency shutdown procedure

The current paid AI operations include:

POST /api/search
POST /api/clarify
POST /api/refine

Future Vercel and Supabase resource consumption should also be considered where appropriate.

Do not design or implement these controls as part of Documentation Reconciliation.



**Validated lexical-product baseline:**



Describe a word > Search > bestWord, confidence, Definition, Why it fits, and three Alternatives > accept bestWord or an Alternative, or select Not quite > one targeted clarification > refined candidates > accept refined bestWord or an Alternative

