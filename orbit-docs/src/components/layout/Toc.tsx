import type { Block } from "@/types";

export function Toc({ blocks }: { blocks: Block[] }) {
  const heads = blocks.filter((b): b is Extract<Block, { type: "heading" }> => b.type === "heading");
  if (!heads.length) return null;
  return (
    <nav aria-label="On this page" className="sticky top-20 hidden w-48 shrink-0 self-start text-sm xl:block">
      <h3 className="mb-2 font-medium text-slate-900 dark:text-white">On this page</h3>
      <ul className="space-y-1.5 border-l border-slate-200 dark:border-slate-800">
        {heads.map((h) => (
          <li key={h.id}><a href={`#${h.id}`} className="-ml-px block border-l border-transparent pl-3 hover:border-brand hover:text-brand">{h.text}</a></li>
        ))}
      </ul>
    </nav>
  );
}
