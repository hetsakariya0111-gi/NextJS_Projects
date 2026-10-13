"use client";
import { GitBranch, Plug } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VERSION } from "@/data/dummyData";
import { docHref, getNavigation } from "@/lib/docs";
import { NavIcon } from "@/components/ui/NavIcon";

export function Sidebar() {
  const pathname = usePathname();
  const item = (active: boolean) =>
    `flex items-center gap-2 rounded-md px-3 py-1.5 text-sm ${active
      ? "bg-indigo-50 font-medium text-brand dark:bg-indigo-950/50 dark:text-brand-dark"
      : "hover:bg-slate-100 dark:hover:bg-slate-900"}`;

  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 flex-col justify-between overflow-y-auto border-r border-slate-200 p-4 dark:border-slate-800 lg:flex">
      <nav aria-label="Documentation">
        <p className="mb-4 px-3">
          <span className="block font-semibold text-slate-900 dark:text-white">Core Documentation</span>
          <span className="text-xs text-slate-500">{VERSION} Architecture Guide</span>
        </p>
        {getNavigation().map((section) => (
          <div key={section.label} className="mb-5">
            <h3 className="mb-1 px-3 text-xs font-medium text-slate-500">{section.label}</h3>
            <ul className="space-y-0.5">
              {section.items.map((it) => {
                const href = docHref(it.slug);
                return (
                  <li key={href}>
                    <Link href={href} aria-current={pathname === href ? "page" : undefined} className={item(pathname === href)}>
                      <NavIcon name={it.icon} /> {it.title}
                    </Link>
                    {it.children && pathname.startsWith(href) && (
                      <ul className="ml-6 mt-0.5 border-l border-slate-200 pl-2 dark:border-slate-800">
                        {it.children.map((c) => (
                          <li key={c.title}>
                            <Link href={docHref(c.slug)} className={item(pathname === docHref(c.slug))}>{c.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      <ul className="space-y-0.5 border-t border-slate-200 pt-3 text-sm dark:border-slate-800">
        <li><a href="#" className={item(false)}><GitBranch className="h-4 w-4" /> GitHub Repo</a></li>
        <li><a href="#" className={item(false)}><Plug className="h-4 w-4" /> API Reference</a></li>
      </ul>
    </aside>
  );
}
