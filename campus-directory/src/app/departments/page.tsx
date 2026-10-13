import type { Metadata } from "next";
import Link from "next/link";
import { departments } from "@/lib/data";

export const metadata: Metadata = { title: "Departments" };

export default function DepartmentsPage() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-2 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-semibold">Departments</h1>
          <p className="mt-1 text-sm text-slate-500">Explore academic faculties, programs, and enrolled students.</p>
        </div>
        <p className="flex items-center gap-2 text-xs text-slate-600">
          <span aria-hidden className="h-2 w-2 rounded-full bg-indigo-600" />{departments.length} Active Academic Faculties
        </p>
      </div>

      <ul className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
        {departments.map((d) => (
          <li key={d.slug} className="flex flex-col gap-3 border-b border-slate-200 p-5 last:border-0 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span aria-hidden className="flex h-7 w-7 items-center justify-center rounded bg-indigo-100 text-xs font-bold text-indigo-700">{d.icon}</span>
                <h2 className="font-semibold"><Link href={`/departments/${d.slug}`} className="hover:text-indigo-600">{d.name}</Link></h2>
              </div>
              <p className="mt-2 text-sm text-slate-600">{d.description}</p>
              <p className="mt-2 text-xs text-slate-500">{d.specializations.length} Specializations · {d.enrolled} Enrolled Students</p>
            </div>
            <Link href={`/students?department=${d.slug}`} className="shrink-0 text-sm font-medium text-indigo-600 hover:underline">View students →</Link>
          </li>
        ))}
      </ul>

      <p className="mt-4 flex justify-between text-[11px] text-slate-500">
        <span>Curriculum Year 2024–2025</span><span>Updated daily via Campus Records API</span>
      </p>
    </div>
  );
}
