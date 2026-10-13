export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl animate-pulse space-y-4 px-6 py-12" aria-busy="true">
      <div className="h-10 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
      <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-800" />
      <div className="h-24 w-full rounded bg-slate-200 dark:bg-slate-800" />
    </div>
  );
}
