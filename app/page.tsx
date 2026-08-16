export default function Home() {
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
        <label htmlFor="description" className="sr-only">
          Describe the word you are trying to remember
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="For example, a word for being boldly disrespectful toward authority."
          className="block w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-base leading-7 text-slate-950 shadow-sm outline-none placeholder:text-slate-400 focus:border-slate-600 focus:ring-2 focus:ring-slate-200"
        />
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Search
          </button>
        </div>
      </section>

      <article
        aria-labelledby="best-word"
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
              Impudent
            </h2>
          </div>
          <div className="sm:text-right">
            <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">
              Confidence
            </p>
            <p className="mt-1 text-2xl font-semibold tabular-nums text-slate-900">
              94%
            </p>
          </div>
        </div>

        <div className="py-6">
          <section className="pb-5">
            <h3 className="text-sm font-semibold text-slate-950">Definition</h3>
            <p className="mt-2 leading-7 text-slate-700">
              Boldly disrespectful, especially toward authority or accepted
              social norms.
            </p>
          </section>

          <section className="border-t border-slate-200 py-5">
            <h3 className="text-sm font-semibold text-slate-950">Why it fits</h3>
            <p className="mt-2 leading-7 text-slate-700">
              The description suggests deliberate disrespect combined with
              boldness rather than simple impoliteness.
            </p>
          </section>

          <section className="border-t border-slate-200 pt-5">
            <h3 className="text-sm font-semibold text-slate-950">
              Alternatives
            </h3>
            <ul className="mt-3 divide-y divide-slate-200 border-y border-slate-200">
              <li className="py-3.5 leading-7 text-slate-700">
                <span className="font-semibold text-slate-950">Insolent.</span>{" "}
                More openly contemptuous or disrespectful.
              </li>
              <li className="py-3.5 leading-7 text-slate-700">
                <span className="font-semibold text-slate-950">
                  Impertinent.
                </span>{" "}
                Improperly bold or disrespectful, often somewhat less hostile.
              </li>
              <li className="py-3.5 leading-7 text-slate-700">
                <span className="font-semibold text-slate-950">
                  Contumacious.
                </span>{" "}
                Stubbornly disobedient toward authority; much more formal and
                uncommon.
              </li>
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
              className="min-h-14 w-[calc(50%-0.5rem)] rounded-md border border-slate-300 bg-white px-4 py-3.5 text-base font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 sm:w-[15.25rem]"
            >
              Not quite
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
