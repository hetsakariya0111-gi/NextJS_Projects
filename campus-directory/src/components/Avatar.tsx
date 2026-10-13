import { initials } from "@/lib/data";
import type { Tone } from "@/types";

const tones: Record<Tone, string> = {
  blue: "bg-indigo-100 text-indigo-700",
  orange: "bg-orange-100 text-orange-700",
  red: "bg-rose-100 text-rose-700",
};

export default function Avatar({ name, tone, size = "md" }: { name: string; tone: Tone; size?: "md" | "lg" }) {
  const dims = size === "lg" ? "h-14 w-14 text-lg" : "h-10 w-10 text-xs";
  return (
    <span aria-hidden className={`inline-flex shrink-0 items-center justify-center rounded-lg font-semibold ${dims} ${tones[tone]}`}>
      {initials(name)}
    </span>
  );
}
