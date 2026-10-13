import Link from "next/link";
import Avatar from "./Avatar";
import { getDepartment, yearLabel } from "@/lib/data";
import type { Student } from "@/types";

export default function StudentCard({ student }: { student: Student }) {
  const dept = getDepartment(student.departmentSlug);
  return (
    <Link href={`/students/${student.id}`}
      className="block rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600">
      <div className="flex items-start justify-between">
        <Avatar name={student.name} tone={student.tone} />
        <span className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-600">{student.id}</span>
      </div>
      <h3 className="mt-3 font-semibold">{student.name}</h3>
      <p className="mt-1 flex items-center gap-2 text-xs text-slate-500">
        <span className="rounded border border-indigo-200 bg-indigo-50 px-1.5 py-0.5 text-indigo-700">{dept?.name}</span>
        {yearLabel(student.year)}
      </p>
      <p className="mt-4 border-t border-slate-100 pt-3 text-xs font-medium text-indigo-600">View profile →</p>
    </Link>
  );
}
