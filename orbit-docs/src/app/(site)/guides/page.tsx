import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuides } from "@/lib/docs";

export const metadata: Metadata = { title: "Guides" };

export default function GuidesPage() {
  const guides = getAllGuides();
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Guides</h1>
      <p className="mt-3">Task-focused walkthroughs that build on the reference documentation.</p>
      {guides.length === 0 ? (
        <p className="mt-8 rounded-md border border-dashed border-slate-300 p-6 text-sm dark:border-slate-700">No guides have been published yet. Check the documentation in the meantime.</p>
      ) : (
        <ul className="mt-8 space-y-4">
          {guides.map((g) => (
            <li key={g.id}>
              <Link href={`/guides/${g.id}`} className="block rounded-md border border-slate-200 p-5 hover:border-brand dark:border-slate-800">
                <h2 className="font-semibold text-slate-900 dark:text-white">{g.title}</h2>
                <p className="mt-1 text-sm">{g.summary}</p>
                <p className="mt-3 text-xs text-slate-500">{g.level}, {g.readTime}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
