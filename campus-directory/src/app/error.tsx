"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-md py-20 text-center">
      <h1 className="text-xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-sm text-slate-500">{error.message || "The page could not be loaded."}</p>
      <button onClick={reset} className="mt-5 rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">Try again</button>
    </div>
  );
}
