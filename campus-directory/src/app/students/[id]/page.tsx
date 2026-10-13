import Link from "next/link";
import { notFound } from "next/navigation";
import Avatar from "@/components/Avatar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDepartment, getStudent, students, yearLabel, yearLabelLong } from "@/lib/data";

export function generateStaticParams() {
  return students.map((s) => ({ id: s.id }));
}

export default async function StudentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const student = getStudent(id);
  if (!student) notFound();
  const dept = getDepartment(student.departmentSlug);
  const field = "text-[11px] font-medium uppercase tracking-wide text-slate-500";

  return (
    <div className="mx-auto max-w-2xl">
      <Breadcrumbs items={[{ label: "Students", href: "/students" }, { label: student.name }]} />
      <Link href="/students" className="text-xs text-slate-500 hover:text-indigo-600">← Back to students</Link>

      <article className="mt-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <header className="flex items-center gap-4">
          <Avatar name={student.name} tone={student.tone} size="lg" />
          <div>
            <h1 className="text-2xl font-semibold">{student.name}</h1>
            <div className="mt-1 flex gap-2 text-[11px]">
              <span className="rounded border border-indigo-200 bg-indigo-50 px-1.5 py-0.5 font-mono text-indigo-700">{student.id}</span>
              <span className="rounded border border-green-200 bg-green-50 px-1.5 py-0.5 text-green-700">{student.status}</span>
            </div>
          </div>
        </header>

        <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-200 pt-4 text-sm">
          <div><dt className={field}>Department</dt><dd>{dept?.name}</dd></div>
          <div><dt className={field}>Study year</dt><dd>{yearLabelLong(student.year)}</dd></div>
          <div><dt className={field}>Email</dt><dd><a className="text-indigo-600 hover:underline" href={`mailto:${student.email}`}>{student.email}</a></dd></div>
          <div><dt className={field}>Enrolled</dt><dd>{student.enrolled}</dd></div>
        </dl>

        <section className="mt-6 border-t border-slate-200 pt-4">
          <h2 className="font-semibold">About</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{student.about}</p>
        </section>

        <section className="mt-6 border-t border-slate-200 pt-4">
          <h2 className="font-semibold">Academic Details</h2>
          <div className="mt-3 flex justify-between border-b border-slate-100 py-2 text-sm"><span className="text-slate-500">Department</span><span>{dept?.name}</span></div>
          <div className="flex justify-between border-b border-slate-100 py-2 text-sm"><span className="text-slate-500">Current Academic Standing</span><span>{yearLabel(student.year)} Undergraduate</span></div>
          <h3 className={`${field} mt-4`}>Enrolled subjects</h3>
          <ul className="mt-2 overflow-hidden rounded border border-slate-200 bg-slate-50 text-xs">
            {student.subjects.map((s) => (
              <li key={s.code} className="flex justify-between border-b border-slate-200 px-3 py-2 last:border-0">
                <span>{s.code}: {s.name}</span><span className="text-slate-500">{s.credits.toFixed(1)} Credits</span>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <p className="mt-3 flex justify-between text-[11px] text-slate-500">
        <span>System Record ID: {student.recordId}</span><span>Last validated: {student.validated}</span>
      </p>
    </div>
  );
}
