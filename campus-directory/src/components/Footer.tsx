"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500">
        <span>Campus Directory © Academic Informatics Core</span>
        <span>Path: {pathname}</span>
      </div>
    </footer>
  );
}
