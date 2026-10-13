export function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split("`").map((part, i) =>
        i % 2 ? (
          <code key={i} className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.85em] text-brand dark:bg-slate-800 dark:text-brand-dark">{part}</code>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
