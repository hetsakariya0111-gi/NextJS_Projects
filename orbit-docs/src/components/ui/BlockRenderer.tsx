import type { Block } from "@/types";
import { Callout } from "./Callout";
import { CodeBlock } from "./CodeBlock";
import { DocTable } from "./DocTable";
import { Inline } from "./Inline";

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "heading":
            return <h2 key={i} id={b.id} className="mb-3 mt-10 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">{b.text}</h2>;
          case "paragraph":
            return <p key={i} className="my-3 leading-7"><Inline text={b.text} /></p>;
          case "code":
            return <CodeBlock key={i} filename={b.filename} code={b.code} />;
          case "callout":
            return <Callout key={i} variant={b.variant} title={b.title} text={b.text} />;
          case "table":
            return <DocTable key={i} head={b.head} rows={b.rows} />;
        }
      })}
    </>
  );
}
