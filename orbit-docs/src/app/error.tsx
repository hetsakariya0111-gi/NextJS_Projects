"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl px-6 py-20">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Something went wrong</h1>
      <p className="mt-3 text-sm">{error.message || "An unexpected error occurred while rendering this page."}</p>
      <button onClick={reset} className="mt-6 rounded-md bg-brand px-4 py-2 text-sm font-medium text-white">Try again</button>
    </div>
  );
}
