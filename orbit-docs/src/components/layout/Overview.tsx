import { ArrowRight, Info } from "lucide-react";
import Link from "next/link";
import { overviewCards } from "@/data/dummyData";
import { docHref } from "@/lib/docs";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { NavIcon } from "@/components/ui/NavIcon";

export function Overview() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Documentation</h1>
      <p className="mt-3">Welcome to Orbit Docs. Explore the core architecture, installation guides, and complete API references for building scalable modern web applications.</p>
      <div className="mt-8 space-y-4">
        {overviewCards.map((c) => (
          <Link key={c.title} href={docHref(c.slug)} className="block rounded-md border border-slate-200 bg-slate-50 p-5 hover:border-brand dark:border-slate-800 dark:bg-slate-900">
            <h2 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><NavIcon name={c.icon} className="h-4 w-4 text-brand" /> {c.title}</h2>
            <p className="mt-1 text-sm">{c.text}</p>
            <span className="mt-4 inline-flex items-center gap-1 border-t border-slate-200 pt-3 text-sm text-brand dark:border-slate-800">{c.cta} <ArrowRight className="h-3.5 w-3.5" /></span>
          </Link>
        ))}
      </div>
      <aside className="my-8 flex gap-3 rounded-md border border-indigo-200 bg-indigo-50 p-4 text-sm dark:border-indigo-900 dark:bg-indigo-950/40">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
        <p><strong>Architecture Alignment: </strong>Orbit 1.0 utilizes unified server-driven component composition with strict compile-time static checks. Ensure you review the configuration parameters before migration.</p>
      </aside>
      <CodeBlock filename="Terminal — Quick Setup" code={"$ npx orbit-cli create my-app --template standard\n$ cd my-app && npm run dev"} />
    </div>
  );
}
