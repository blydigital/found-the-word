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


**Milestone 1:**



Describe a word > Search > Impudent > Explanation > 👍 or 👎

