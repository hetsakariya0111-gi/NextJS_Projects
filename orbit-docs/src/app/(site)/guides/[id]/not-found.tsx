import Link from "next/link";

export default function GuideNotFound() {
  return (
    <main className="mx-auto max-w-xl px-6 py-20">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Guide not found</h1>
      <p className="mt-3 text-sm">No guide matches this identifier. It may have been renamed or removed.</p>
      <Link href="/guides" className="mt-6 inline-block text-sm font-medium text-brand">Browse all guides</Link>
    </main>
  );
}
