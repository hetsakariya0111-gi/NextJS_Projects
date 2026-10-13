import Link from "next/link";

export interface Crumb { label: string; href?: string }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-3 text-xs text-slate-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {c.href ? <Link href={c.href} className="hover:text-indigo-600 hover:underline">{c.label}</Link>
              : <span aria-current="page" className="font-medium text-slate-800">{c.label}</span>}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
