export function DocTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-md border border-slate-200 dark:border-slate-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-xs text-slate-500 dark:bg-slate-900">
          <tr>{head.map((h) => <th key={h} className="px-4 py-2 font-medium">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-slate-200 dark:border-slate-800">
              {r.map((c, j) => <td key={j} className="px-4 py-2.5 font-mono text-xs">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
