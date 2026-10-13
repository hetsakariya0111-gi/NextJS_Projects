import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/ui/BlockRenderer";
import { Overview } from "@/components/layout/Overview";
import { Toc } from "@/components/layout/Toc";
import { docHref, getAdjacent, getAllDocs, getDocBySlug } from "@/lib/docs";

type Props = { params: Promise<{ slug?: string[] }> };

export function generateStaticParams() {
  return [{ slug: [] }, ...getAllDocs().map((d) => ({ slug: d.slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug = [] } = await params;
  const doc = slug.length ? getDocBySlug(slug) : undefined;
  return doc ? { title: doc.title, description: doc.description } : { title: "Documentation" };
}

export default async function DocsPage({ params }: Props) {
  const { slug = [] } = await params;
  if (!slug.length) return <Overview />;

  const doc = getDocBySlug(slug);
  if (!doc) notFound();
  const { prev, next } = getAdjacent(slug);

  return (
    <div className="flex gap-10">
      <article className="min-w-0 max-w-3xl flex-1">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">{doc.crumbs.join(" / ")}</nav>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{doc.title}</h1>
        <p className="mt-3 border-b border-slate-200 pb-6 text-lg dark:border-slate-800">{doc.description}</p>
        <BlockRenderer blocks={doc.blocks} />
        <div className="mt-14 flex justify-between border-t border-slate-200 pt-6 text-sm dark:border-slate-800">
          {prev ? <Link href={docHref(prev.slug)} className="group"><span className="block text-xs text-slate-500">Previous</span><span className="flex items-center gap-1 font-medium text-brand"><ArrowLeft className="h-3.5 w-3.5" />{prev.title}</span></Link> : <span />}
          {next ? <Link href={docHref(next.slug)} className="group text-right"><span className="block text-xs text-slate-500">Next</span><span className="flex items-center gap-1 font-medium text-brand">{next.title}<ArrowRight className="h-3.5 w-3.5" /></span></Link> : <span />}
        </div>
      </article>
      <Toc blocks={doc.blocks} />
    </div>
  );
}
