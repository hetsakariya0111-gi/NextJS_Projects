import type { Metadata } from "next";
import StudentGrid from "@/components/StudentGrid";
import { departments, students } from "@/lib/data";

export const metadata: Metadata = { title: "Students" };

export default async function StudentsPage({ searchParams }: { searchParams: Promise<{ department?: string }> }) {
  const { department } = await searchParams;
  const valid = departments.some((d) => d.slug === department);
  return (
    <div>
      <h1 className="text-3xl font-semibold">Students</h1>
      <p className="mt-1 mb-6 text-sm text-slate-500">Browse students and view their profiles.</p>
      <StudentGrid students={students} departments={departments.map(({ slug, name }) => ({ slug, name }))}
        initialDepartment={valid ? department : "all"} />
    </div>
  );
}
