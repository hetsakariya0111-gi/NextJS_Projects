"use client";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CodeBlock({ filename, code }: { filename: string; code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* clipboard unavailable */ }
  };
  return (
    <figure className="my-6 overflow-hidden rounded-md border border-slate-800 bg-slate-900 text-slate-100">
      <figcaption className="flex items-center justify-between border-b border-slate-700 px-4 py-2 font-mono text-xs text-slate-400">
        <span>{filename}</span>
        <button onClick={copy} className="flex items-center gap-1 hover:text-white">
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </figcaption>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed"><code>{code}</code></pre>
    </figure>
  );
}
