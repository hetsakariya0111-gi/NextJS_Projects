import { docs, guides, navigation } from "@/data/dummyData";
import type { DocPage, Guide } from "@/types";

export const docHref = (slug: string[]) => `/docs/${slug.join("/")}`;
const key = (slug: string[]) => slug.join("/");

export function getAllDocs(): DocPage[] { return docs; }
export function getDocBySlug(slug: string[]): DocPage | undefined {
  return docs.find((d) => key(d.slug) === key(slug));
}

export function getAdjacent(slug: string[]) {
  const i = docs.findIndex((d) => key(d.slug) === key(slug));
  return { prev: docs[i - 1], next: docs[i + 1] };
}

export function searchDocs(query: string): DocPage | undefined {
  const q = query.trim().toLowerCase();
  return q ? docs.find((d) => d.title.toLowerCase().includes(q)) : undefined;
}

export function getAllGuides(): Guide[] { return guides; }
export function getGuideById(id: string): Guide | undefined { return guides.find((g) => g.id === id); }
export function getNavigation() { return navigation; }
