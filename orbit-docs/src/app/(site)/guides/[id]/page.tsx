import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { docHref, getAllGuides, getDocBySlug, getGuideById } from "@/lib/docs";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return getAllGuides().map((g) => ({ id: g.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const guide = getGuideById(id);
  return { title: guide?.title ?? "Guide" };
}

export default async function GuidePage({ params }: Props) {
  const { id } = await params;
  const guide = getGuideById(id);
  if (!guide) notFound();
  const doc = getDocBySlug(guide.docSlug);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/guides" className="text-sm text-brand">Back to guides</Link>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{guide.title}</h1>
      <p className="mt-2 text-xs text-slate-500">{guide.level}, {guide.readTime}</p>
      <p className="mt-6 text-lg">{guide.summary}</p>
      {doc && (
        <p className="mt-6 text-sm">This guide builds on <Link href={docHref(doc.slug)} className="font-medium text-brand underline">{doc.title}</Link> in the documentation.</p>
      )}
    </main>
  );
}
