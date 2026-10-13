import Link from "next/link";
import { notFound } from "next/navigation";
import Avatar from "@/components/Avatar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { departments, getDepartment, getSpecialization, students, yearLabel } from "@/lib/data";

export function generateStaticParams() {
  return departments.flatMap((d) => d.specializations.map((s) => ({ slug: d.slug, spec: s.slug })));
}

export default async function SpecializationPage({ params }: { params: Promise<{ slug: string; spec: string }> }) {
  const { slug, spec } = await params;
  const dept = getDepartment(slug);
  const sp = getSpecialization(slug, spec);
  if (!dept || !sp) notFound();
  const members = students.filter((s) => s.departmentSlug === slug && s.specializationSlug === spec);
  const label = "text-xs text-slate-500";

  return (
    <div>
      <Breadcrumbs items={[{ label: "Departments", href: "/departments" }, { label: dept.name, href: `/departments/${slug}` }, { label: sp.name }]} />
      <div className="mb-4 flex justify-between border-b border-slate-200 pb-3 text-xs">
        <Link href={`/departments/${slug}`} className="text-indigo-600 hover:underline">← Return to {dept.name} Department</Link>
        <Link href={`/students?department=${slug}`} className="text-slate-500 hover:text-indigo-600">View all students →</Link>
      </div>

      <section className="rounded-lg border border-slate-200 bg-white p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="flex flex-wrap items-center gap-3 text-2xl font-semibold">
              {sp.name}
              <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-[11px] font-normal text-indigo-700">Specialization under {dept.name}</span>
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-600">{sp.description}</p>
          </div>
          <div className="text-right"><p className={label}>Department track</p>
            <p className="mt-1 rounded border border-slate-300 bg-slate-50 px-2 py-1 font-mono text-xs">{sp.code}</p></div>
        </div>
        <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-200 pt-4 text-sm sm:grid-cols-4">
          <div><dt className={label}>Academic Lead</dt><dd>{sp.lead}</dd></div>
          <div><dt className={label}>Primary Core Lab</dt><dd>{sp.lab}</dd></div>
          <div><dt className={label}>Total Enrollment</dt><dd>{members.length} Active Enrollees</dd></div>
          <div><dt className={label}>Curriculum Cycle</dt><dd>2024–2025 Revised</dd></div>
        </dl>
      </section>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
        <h2 className="font-semibold">Students in this Specialization <span className="ml-1 rounded bg-slate-200 px-1.5 text-xs">{members.length}</span></h2>
        <span className="text-xs text-slate-500">Filtered by Track: <b className="rounded bg-slate-200 px-1.5 py-0.5 font-medium">{sp.name}</b></span>
      </div>

      {members.length === 0 ? (
        <p className="mt-6 text-sm text-slate-500">No students are enrolled in this specialization yet.</p>
      ) : (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {members.map((s) => (
            <li key={s.id}>
              <Link href={`/students/${s.id}`} className="block rounded-lg border border-slate-200 bg-white p-4 hover:border-indigo-300">
                <div className="flex items-start gap-3">
                  <Avatar name={s.name} tone={s.tone} />
                  <div className="flex-1"><p className="font-medium">{s.name}</p><p className="text-[11px] text-slate-500">{s.id}</p></div>
                  <span className="rounded border border-slate-300 px-1.5 text-[11px] text-slate-600">Year {s.year}</span>
                </div>
                <div className="mt-4 flex justify-between border-t border-slate-100 pt-3 text-[11px]">
                  <span className="text-slate-500">{s.focus}</span><span className="text-indigo-600">View profile →</span>
                </div>
                <span className="sr-only">{yearLabel(s.year)}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
