import { Database, FolderOpen, Layout, LogIn, Download, Settings, Split, Terminal } from "lucide-react";
import type { IconName } from "@/types";

const icons = { intro: LogIn, install: Download, setup: FolderOpen, routing: Split, layouts: Layout, data: Database, config: Settings, cli: Terminal };

export function NavIcon({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden />;
}
