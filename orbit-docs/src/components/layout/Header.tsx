"use client";
import { BookOpen, Moon, Search, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useState } from "react";
import { VERSION } from "@/data/dummyData";
import { docHref, searchDocs } from "@/lib/docs";

const links = [
  { href: "/docs", label: "Documentation" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [q, setQ] = useState("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const hit = searchDocs(q);
    router.push(hit ? docHref(hit.slug) : `/docs/search/${encodeURIComponent(q.trim())}`);
    setQ("");
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-6 border-b border-slate-200 bg-white/90 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <Link href="/docs" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
        <BookOpen className="h-5 w-5 text-brand" aria-hidden /> Orbit Docs
      </Link>
      <nav className="hidden gap-5 text-sm sm:flex" aria-label="Primary">
        {links.map((l) => {
          const active = pathname.startsWith(l.href);
          return (
            <Link key={l.href} href={l.href} className={active ? "font-medium text-brand dark:text-brand-dark" : "hover:text-slate-900 dark:hover:text-white"}>
              {l.label}
            </Link>
          );
        })}
      </nav>
      <div className="ml-auto flex items-center gap-3">
        <form onSubmit={onSearch} role="search" className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2 h-4 w-4 text-slate-400" aria-hidden />
          <input value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search documentation"
            placeholder="Search documentation..."
            className="h-8 w-64 rounded-md border border-slate-200 bg-slate-50 pl-8 pr-2 text-sm dark:border-slate-700 dark:bg-slate-900" />
        </form>
        <span className="rounded border border-slate-200 px-1.5 py-0.5 text-xs dark:border-slate-700">{VERSION}</span>
        <button aria-label="Toggle theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="rounded p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800">
          <Sun className="hidden h-4 w-4 dark:block" /><Moon className="h-4 w-4 dark:hidden" />
        </button>
      </div>
    </header>
  );
}
