import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const routes = [
  { label: "Computer Science Department", href: "/departments/computer-science" },
  { label: "Web Development Specialization", href: "/departments/computer-science/web-development" },
  { label: "Aarav Mehta", href: "/students/STU-1042" },
];

export default function NotFound() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Directory", href: "/students" }, { label: "Not Found" }]} />
      <div className="mx-auto max-w-xl py-12 text-center">
        <span className="rounded border border-slate-300 bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">404 · ROUTE NOT FOUND</span>
        <h1 className="mt-6 text-2xl font-semibold">Student or department not found</h1>
        <p className="mt-3 text-sm text-slate-500">The requested directory entry or path could not be located. It may have moved or the identifier might be invalid.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/students" className="rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">Return to Students Directory</Link>
          <Link href="/departments" className="rounded border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50">Browse All Departments</Link>
        </div>
        <div className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white text-left">
          <p className="border-b border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-500">Suggested starting points</p>
          <ul>
            {routes.map((r) => (
              <li key={r.href} className="border-b border-slate-100 last:border-0">
                <Link href={r.href} className="flex items-center justify-between px-4 py-3 text-sm hover:bg-slate-50">
                  {r.label}<span className="font-mono text-xs text-slate-400">{r.href}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
