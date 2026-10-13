"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/students", label: "Students" },
  { href: "/departments", label: "Departments" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/students" className="flex items-center gap-2 text-sm font-semibold">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 text-xs text-white">C</span>
            Campus Directory
          </Link>
          <nav aria-label="Main" className="flex h-14 items-stretch gap-4 text-sm">
            {links.map((l) => {
              const active = pathname.startsWith(l.href);
              return (
                <Link key={l.href} href={l.href} aria-current={active ? "page" : undefined}
                  className={`flex items-center border-b-2 ${active ? "border-indigo-600 font-medium text-slate-900" : "border-transparent text-slate-500 hover:text-slate-900"}`}>
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <span className="hidden rounded border border-slate-200 bg-slate-100 px-2 py-1 text-xs text-slate-600 sm:inline">Frontend Practice</span>
      </div>
    </header>
  );
}
