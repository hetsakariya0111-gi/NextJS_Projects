import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-semibold">About</h1>
      <p className="mt-3 text-slate-600">Campus Directory is a frontend practice project built with the Next.js App Router, TypeScript, and Tailwind CSS. All records come from local mock data in lib/data.ts, so no database or backend is needed.</p>
    </div>
  );
}
