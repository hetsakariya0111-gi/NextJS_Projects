export default function Loading() {
  return (
    <div role="status" aria-label="Loading" className="animate-pulse">
      <div className="h-8 w-48 rounded bg-slate-200" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-32 rounded-lg bg-slate-200" />)}
      </div>
    </div>
  );
}
