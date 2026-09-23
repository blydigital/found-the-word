"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";

type SearchResult = {
  bestWord: string;
  confidence: number;
  definition: string;
  whyItFits: string;
  alternatives: Array<{
    word: string;
    difference: string;
  }>;
};

type ClarificationPhase =
  | "idle"
  | "requesting-question"
  | "awaiting-response"
  | "refining"
  | "complete";

export default function Home() {
  const [description, setDescription] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedDescription, setSubmittedDescription] = useState("");
  const [initialResult, setInitialResult] = useState<SearchResult | null>(null);
  const [clarificationQuestion, setClarificationQuestion] = useState("");
  const [clarificationResponse, setClarificationResponse] = useState("");
  const [clarificationPhase, setClarificationPhase] =
    useState<ClarificationPhase>("idle");
  const [clarificationError, setClarificationError] = useState<string | null>(
    null,
  );

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!description.trim()) {
      setResult(null);
      setError("Enter a description before searching.");
      return;
    }

    const currentDescription = description;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: currentDescription }),
      });

      if (!response.ok) {
        throw new Error("Search request failed.");
      }

      const searchResult = (await response.json()) as SearchResult;
      setResult(searchResult);
      setSubmittedDescription(currentDescription);
      setInitialResult(null);
      setClarificationQuestion("");
      setClarificationResponse("");
      setClarificationPhase("idle");
      setClarificationError(null);
    } catch {
      setError("We could not complete your search. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleNotQuite() {
    if (
      !result ||
      !submittedDescription ||
      clarificationPhase !== "idle"
    ) {
      return;
    }

    const previousResult = result;

    setInitialResult(previousResult);
    setClarificationError(null);
    setClarificationPhase("requesting-question");

    try {
      const response = await fetch("/api/clarify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          originalDescription: submittedDescription,
          previousResult,
        }),
      });

      if (!response.ok) {
        throw new Error("Clarification request failed.");
      }

      const data = (await response.json()) as { question: string };
      setClarificationQuestion(data.question);
      setClarificationResponse("");
      setClarificationPhase("awaiting-response");
    } catch {
      setClarificationPhase("idle");
      setClarificationError(
        "We could not prepare a clarification question. Please try again.",
      );
    }
  }

  async function handleRefinement(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      clarificationPhase !== "awaiting-response" ||
      !initialResult ||
      !clarificationQuestion
    ) {
      return;
    }

    if (!clarificationResponse.trim()) {
      setClarificationError("Enter a response before refining the search.");
      return;
    }

    setClarificationError(null);
    setClarificationPhase("refining");

    try {
      const response = await fetch("/api/refine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          originalDescription: submittedDescription,
          previousResult: initialResult,
          clarificationQuestion,
          clarificationResponse,
        }),
      });

      if (!response.ok) {
        throw new Error("Refinement request failed.");
      }

      const refinedResult = (await response.json()) as SearchResult;
      setResult(refinedResult);
      setClarificationPhase("complete");
    } catch {
      setClarificationPhase("awaiting-response");
      setClarificationError(
        "We could not refine your search. Please try again.",
      );
    }
  }

  function handleDescriptionKeyDown(
    event: KeyboardEvent<HTMLTextAreaElement>,
  ) {
    if (event.key !== "Enter" || event.shiftKey) {
      return;
    }

    event.preventDefault();

    if (!isLoading) {
      event.currentTarget.form?.requestSubmit();
    }
  }

  function handleClarificationKeyDown(
    event: KeyboardEvent<HTMLTextAreaElement>,
  ) {
    if (event.key !== "Enter" || event.shiftKey) {
      return;
    }

    event.preventDefault();

    if (clarificationPhase === "awaiting-response") {
      event.currentTarget.form?.requestSubmit();
    }
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-12">
      <header className="mb-8">
        <h1 className="font-serif text-4xl leading-tight font-medium tracking-[-0.025em] text-slate-950 sm:text-5xl">
          What&apos;s the Word?
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
          Describe the word you&apos;re trying to remember.
        </p>
      </header>

      <section aria-labelledby="search-heading">
        <h2 id="search-heading" className="sr-only">
          Word search
        </h2>
        <form onSubmit={handleSearch}>
          <label htmlFor="description" className="sr-only">
            Describe the word you are trying to remember
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            maxLength={1000}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            onKeyDown={handleDescriptionKeyDown}
            aria-describedby={error ? "search-error" : undefined}
            aria-invalid={Boolean(error)}
            placeholder="For example, a word for being boldly disrespectful toward authority."
            className="block w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-base leading-7 text-slate-950 shadow-sm outline-none placeholder:text-slate-400 focus:border-slate-600 focus:ring-2 focus:ring-slate-200"
          />
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:cursor-not-allowed disabled:bg-slate-500"
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>
          {error && (
            <p
              id="search-error"
              role="alert"
              className="mt-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}
        </form>
      </section>

      {result && (
        <article
          aria-labelledby="best-word"
          aria-live="polite"
          className="mt-12 border-t border-slate-300 pt-8"
        >
          <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">
                Best word
              </p>
              <h2
                id="best-word"
                className="mt-2 font-serif text-4xl font-medium tracking-[-0.02em] text-slate-950"
              >
                {result.bestWord}
              </h2>
            </div>
            <div className="sm:text-right">
              <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">
                Confidence
              </p>
              <p className="mt-1 text-2xl font-semibold tabular-nums text-slate-900">
                {result.confidence}%
              </p>
            </div>
          </div>

          <div className="py-6">
            <section className="pb-5">
              <h3 className="text-sm font-semibold text-slate-950">
                Definition
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                {result.definition}
              </p>
            </section>

            <section className="border-t border-slate-200 py-5">
              <h3 className="text-sm font-semibold text-slate-950">
                Why it fits
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                {result.whyItFits}
              </p>
            </section>

            <section className="border-t border-slate-200 pt-5">
              <h3 className="text-sm font-semibold text-slate-950">
                Alternatives
              </h3>
              <ul className="mt-3 divide-y divide-slate-200 border-y border-slate-200">
                {result.alternatives.map((alternative, index) => (
                  <li
                    key={`${alternative.word}-${index}`}
                    className="py-3.5 leading-7 text-slate-700"
                  >
                    <span className="font-semibold text-slate-950">
                      {alternative.word}.
                    </span>{" "}
                    {alternative.difference}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="border-t border-slate-200 pt-5">
            <p className="font-semibold text-slate-950">
              Was this the word you were looking for?
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Your feedback helps improve future results.
            </p>
            <div className="mt-4 flex justify-between gap-4 sm:gap-6">
              <button
                type="button"
                className="min-h-14 w-[calc(50%-0.5rem)] rounded-md border border-slate-900 bg-slate-900 px-4 py-3.5 text-base font-semibold text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 sm:w-[15.25rem]"
              >
                That&apos;s it
              </button>
              <button
                type="button"
                onClick={handleNotQuite}
                disabled={clarificationPhase !== "idle"}
                className="min-h-14 w-[calc(50%-0.5rem)] rounded-md border border-slate-300 bg-white px-4 py-3.5 text-base font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 sm:w-[15.25rem]"
              >
                {clarificationPhase === "requesting-question"
                  ? "Preparing..."
                  : "Not quite"}
              </button>
            </div>

            {clarificationPhase === "requesting-question" && (
              <p
                role="status"
                aria-live="polite"
                className="mt-4 text-sm text-slate-600"
              >
                Preparing one clarification question.
              </p>
            )}

            {(clarificationPhase === "awaiting-response" ||
              clarificationPhase === "refining") && (
              <form
                onSubmit={handleRefinement}
                className="mt-6 border-t border-slate-200 pt-5"
              >
                <label
                  htmlFor="clarification-response"
                  className="block font-semibold text-slate-950"
                >
                  {clarificationQuestion}
                </label>
                <textarea
                  id="clarification-response"
                  name="clarification-response"
                  rows={3}
                  maxLength={1000}
                  value={clarificationResponse}
                  onChange={(event) =>
                    setClarificationResponse(event.target.value)
                  }
                  onKeyDown={handleClarificationKeyDown}
                  aria-describedby={
                    clarificationError ? "clarification-error" : undefined
                  }
                  aria-invalid={Boolean(clarificationError)}
                  className="mt-3 block w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-base leading-7 text-slate-950 shadow-sm outline-none focus:border-slate-600 focus:ring-2 focus:ring-slate-200"
                />
                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={clarificationPhase === "refining"}
                    className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:cursor-not-allowed disabled:bg-slate-500"
                  >
                    {clarificationPhase === "refining"
                      ? "Refining..."
                      : "Refine search"}
                  </button>
                </div>
              </form>
            )}

            {clarificationError && (
              <p
                id="clarification-error"
                role="alert"
                className="mt-3 text-sm text-red-700"
              >
                {clarificationError}
              </p>
            )}
          </div>
        </article>
      )}
    </main>
  );
}
