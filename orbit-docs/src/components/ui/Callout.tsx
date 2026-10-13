import { AlertTriangle, Info } from "lucide-react";
import { Inline } from "./Inline";

export function Callout({ variant, title, text }: { variant: "info" | "warning"; title: string; text: string }) {
  const warn = variant === "warning";
  const Icon = warn ? AlertTriangle : Info;
  return (
    <aside className={`my-6 flex gap-3 rounded-md border p-4 text-sm ${warn
      ? "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200"
      : "border-indigo-200 bg-indigo-50 text-slate-700 dark:border-indigo-900 dark:bg-indigo-950/40 dark:text-slate-300"}`}>
      <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <p><strong className="font-semibold">{title}: </strong><Inline text={text} /></p>
    </aside>
  );
}
