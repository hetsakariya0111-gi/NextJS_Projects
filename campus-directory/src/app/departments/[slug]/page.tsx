import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StudentCard from "@/components/StudentCard";
import { departments, getDepartment, students } from "@/lib/data";

export function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dept = getDepartment(slug);
  if (!dept) notFound();
  const members = students.filter((s) => s.departmentSlug === dept.slug);

  return (
    <div>
      <Breadcrumbs items={[{ label: "Departments", href: "/departments" }, { label: dept.name }]} />
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-3xl font-semibold">{dept.name}</h1>
          <p className="mt-1 max-w-xl text-sm text-slate-600">{dept.description}</p>
        </div>
        <Link href={`/students?department=${dept.slug}`} className="text-xs font-medium text-indigo-600 hover:underline">View all students →</Link>
      </div>

      <h2 className="mt-8 mb-3 font-semibold">Specializations</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {dept.specializations.map((sp) => (
          <li key={sp.slug}>
            <Link href={`/departments/${dept.slug}/${sp.slug}`} className="block h-full rounded-lg border border-slate-200 bg-white p-4 hover:border-indigo-300">
              <span className="rounded border border-slate-300 bg-slate-100 px-1.5 py-0.5 font-mono text-[11px]">{sp.code}</span>
              <h3 className="mt-2 font-semibold">{sp.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{sp.description}</p>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 mb-3 font-semibold">Students in this department <span className="ml-1 rounded bg-slate-200 px-1.5 text-xs">{members.length}</span></h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((s) => <li key={s.id}><StudentCard student={s} /></li>)}
      </ul>
    </div>
  );
}
