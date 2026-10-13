export type IconName = "intro" | "install" | "setup" | "routing" | "layouts" | "data" | "config" | "cli";

export type Block =
  | { type: "heading"; id: string; text: string }
  | { type: "paragraph"; text: string }
  | { type: "code"; filename: string; code: string }
  | { type: "callout"; variant: "info" | "warning"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export interface DocPage {
  slug: string[];
  title: string;
  description: string;
  crumbs: string[];
  blocks: Block[];
}

export interface NavItem {
  title: string;
  slug: string[];
  icon: IconName;
  children?: { title: string; slug: string[] }[];
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export interface OverviewCard {
  title: string;
  text: string;
  cta: string;
  slug: string[];
  icon: IconName;
}

export interface Guide {
  id: string;
  title: string;
  summary: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  readTime: string;
  docSlug: string[];
}
