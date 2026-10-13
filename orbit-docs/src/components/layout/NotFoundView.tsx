"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { overviewCards } from "@/data/dummyData";
import { docHref } from "@/lib/docs";
import { NavIcon } from "@/components/ui/NavIcon";

export function NotFoundView() {
  const pathname = usePathname();
  const router = useRouter();
  const [path, setPath] = useState(pathname);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <p className="mb-4 inline-block rounded bg-indigo-50 px-2 py-0.5 font-mono text-xs text-brand dark:bg-indigo-950">STATUS: 404_PAGE_NOT_FOUND</p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Page not found</h1>
      <p className="mt-3">The documentation page you requested could not be located. The path may have changed or the slug identifier might be invalid.</p>
      <Link href="/docs" className="mt-4 inline-flex items-center gap-1 text-sm text-brand"><ArrowLeft className="h-4 w-4" /> Back to Documentation</Link>

      <form onSubmit={(e) => { e.preventDefault(); router.push(path.startsWith("/") ? path : `/${path}`); }}
        className="mt-8 rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
        <label htmlFor="path" className="mb-2 block text-xs font-medium">Quick path lookup</label>
        <div className="flex gap-2">
          <input id="path" value={path} onChange={(e) => setPath(e.target.value)}
            className="h-9 flex-1 rounded-md border border-slate-300 bg-white px-3 font-mono text-sm dark:border-slate-700 dark:bg-slate-950" />
          <button className="rounded-md bg-brand px-4 text-sm font-medium text-white">Search</button>
        </div>
      </form>

      <h2 className="mb-3 mt-10 font-semibold text-slate-900 dark:text-white">Suggested articles</h2>
      <ul className="space-y-3">
        {overviewCards.map((c) => (
          <li key={c.title}>
            <Link href={docHref(c.slug)} className="flex items-center gap-3 rounded-md border border-slate-200 p-4 hover:border-brand dark:border-slate-800">
              <NavIcon name={c.icon} className="h-5 w-5 text-brand" />
              <span className="flex-1"><span className="block text-sm font-medium text-slate-900 dark:text-white">{c.title}</span><span className="text-xs">{c.text}</span></span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
        ))}
      </ul>

      <pre className="mt-8 overflow-x-auto rounded-md bg-slate-900 p-4 font-mono text-xs leading-relaxed text-slate-200">
{`# Diagnostic router trace
$ orbit-cli verify --path "${pathname}"
ERR_ROUTER_SLUG_UNMATCHED: No route matching slug segment in manifest tree.
+ Suggested resolution: run orbit sync --manifest`}
      </pre>
    </div>
  );
}
