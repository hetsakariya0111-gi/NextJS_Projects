"use client";
import { useMemo, useState } from "react";
import StudentCard from "./StudentCard";
import type { Student } from "@/types";

const PAGE_SIZE = 9;

export default function StudentGrid({ students, departments, initialDepartment = "all" }: {
  students: Student[];
  departments: { slug: string; name: string }[];
  initialDepartment?: string;
}) {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState(initialDepartment);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return students.filter((s) =>
      (dept === "all" || s.departmentSlug === dept) &&
      (!q || s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q)));
  }, [students, query, dept]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const btn = "rounded border border-slate-200 bg-white px-3 py-1 text-xs disabled:cursor-not-allowed disabled:text-slate-400";

  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
        <input type="search" aria-label="Search students" placeholder="Search students" value={query}
          onChange={(e) => { setQuery(e.target.value); setPage(1); }}
          className="w-full rounded border border-slate-200 px-3 py-2 text-sm sm:max-w-xs" />
        <label className="flex items-center gap-2 text-xs text-slate-500">
          Department:
          <select value={dept} onChange={(e) => { setDept(e.target.value); setPage(1); }}
            className="rounded border border-slate-200 bg-white px-2 py-1.5 text-sm text-slate-900">
            <option value="all">All departments</option>
            {departments.map((d) => <option key={d.slug} value={d.slug}>{d.name}</option>)}
          </select>
        </label>
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-sm text-slate-500">No students match your search. Clear the search or choose All departments.</p>
      ) : (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s) => <li key={s.id}><StudentCard student={s} /></li>)}
        </ul>
      )}

      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-xs text-slate-500">
        <span>Showing <b>{visible.length}</b> of <b>{filtered.length}</b> students</span>
        <div className="flex gap-2">
          <button className={btn} disabled={current === 1} onClick={() => setPage(current - 1)}>Previous</button>
          <button className={btn} disabled={current === pages} onClick={() => setPage(current + 1)}>Next</button>
        </div>
      </div>
    </>
  );
}
