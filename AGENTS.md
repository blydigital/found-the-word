<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Found the Word project instructions

Before making product, UI, architecture, prompt, or workflow changes, read:

* `Documentation/01_Founder_Specification_v1.md`
* `Documentation/04_DECISIONS.md`

Treat those documents as governing project context.

## Product priority

The primary goal is to help users recover the exact word they are trying to remember.

Optimize for the user's likelihood of saying:

"That's exactly the word."

## MVP discipline

Do not add features outside the current MVP unless explicitly instructed.

In particular, do not introduce:

* user accounts
* subscriptions
* general-purpose chat
* SEO content pages
* browser extensions
* mobile apps
* communities
* gamification
* unnecessary dependencies

## Implementation principles

Prefer:

* simple implementations
* readable code
* small components
* explicit behavior
* server-side handling of secrets
* minimal dependencies
* testable incremental changes

Avoid:

* premature abstraction
* unnecessary frameworks
* large refactors without a clear reason
* product decisions that contradict the Founder Specification
* AI-generated stylistic gimmicks

## Writing and UI

Product copy should be:

* concise
* professional
* understated
* precise
* free of hype and buzzwords

Avoid em dashes as a stylistic habit.

The AI should feel invisible to the user.

## Development workflow

For meaningful changes:

1. Read the relevant project documentation.
2. Make the smallest change that accomplishes the goal.
3. Test locally.
4. Keep the working tree understandable.
5. Commit known-working states with descriptive commit messages.
