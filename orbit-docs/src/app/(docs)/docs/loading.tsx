export default function Loading() {
  return (
    <div className="max-w-3xl animate-pulse space-y-4" aria-busy="true">
      <div className="h-4 w-48 rounded bg-slate-200 dark:bg-slate-800" />
      <div className="h-10 w-2/3 rounded bg-slate-200 dark:bg-slate-800" />
      <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-800" />
      <div className="h-40 w-full rounded bg-slate-200 dark:bg-slate-800" />
    </div>
  );
}
