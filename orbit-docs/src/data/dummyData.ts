import type { DocPage, Guide, NavSection, OverviewCard } from "@/types";

export const VERSION = "v1.0";

export const navigation: NavSection[] = [
  { label: "Getting started", items: [
    { title: "Introduction", slug: ["getting-started", "introduction"], icon: "intro" },
    { title: "Installation", slug: ["getting-started", "installation"], icon: "install" },
    { title: "Project Setup", slug: ["getting-started", "project-setup"], icon: "setup" },
  ]},
  { label: "Core concepts", items: [
    { title: "Routing", slug: ["core-concepts", "routing"], icon: "routing",
      children: [{ title: "Dynamic Routes", slug: ["core-concepts", "routing", "dynamic-routes"] }] },
    { title: "Layouts", slug: ["core-concepts", "layouts"], icon: "layouts" },
    { title: "Data Fetching", slug: ["core-concepts", "data-fetching"], icon: "data" },
  ]},
  { label: "Reference", items: [
    { title: "Configuration", slug: ["reference", "configuration"], icon: "config" },
    { title: "CLI Commands", slug: ["reference", "cli-commands"], icon: "cli" },
  ]},
];

export const overviewCards: OverviewCard[] = [
  { title: "Getting Started", text: "Quickstart guides, prerequisites, and initial project configuration.", cta: "Start reading", slug: ["getting-started", "introduction"], icon: "intro" },
  { title: "Core Concepts", text: "Deep dive into nested routing patterns, catch-all paths, and data loading.", cta: "Explore concepts", slug: ["core-concepts", "routing"], icon: "routing" },
  { title: "Reference", text: "Detailed configuration parameters, flags, and CLI commands.", cta: "View reference", slug: ["reference", "configuration"], icon: "config" },
];

export const docs: DocPage[] = [
  {
    slug: ["getting-started", "introduction"], title: "Introduction",
    description: "Orbit is a framework for building scalable, server-first web applications.",
    crumbs: ["Documentation", "Getting Started", "Introduction"],
    blocks: [
      { type: "heading", id: "what-is-orbit", text: "What is Orbit?" },
      { type: "paragraph", text: "Orbit composes server and client components with strict compile-time checks, so routing mistakes surface during the build instead of in production." },
      { type: "callout", variant: "info", title: "Architecture Alignment", text: "Orbit 1.0 uses unified server-driven component composition. Review the configuration parameters before migrating." },
    ],
  },
  {
    slug: ["getting-started", "installation"], title: "Installation",
    description: "Scaffold a new project and run it locally in under a minute.",
    crumbs: ["Documentation", "Getting Started", "Installation"],
    blocks: [
      { type: "heading", id: "requirements", text: "Requirements" },
      { type: "paragraph", text: "You need Node.js 18.18 or later and a package manager such as `npm`, `pnpm`, or `yarn`." },
      { type: "heading", id: "create-a-project", text: "Create a project" },
      { type: "code", filename: "Terminal", code: "$ npx orbit-cli create my-app --template standard\n$ cd my-app && npm run dev" },
    ],
  },
  {
    slug: ["getting-started", "project-setup"], title: "Project Setup",
    description: "Understand the default folder layout and where your code lives.",
    crumbs: ["Documentation", "Getting Started", "Project Setup"],
    blocks: [
      { type: "heading", id: "folder-layout", text: "Folder layout" },
      { type: "paragraph", text: "Every directory inside `app/` maps to a URL segment. Shared UI lives in `components/`, typed data in `data/`." },
      { type: "code", filename: "project tree", code: "my-app/\n  app/\n    layout.tsx\n    page.tsx\n  orbit.config.ts" },
    ],
  },
  {
    slug: ["core-concepts", "routing"], title: "Routing",
    description: "Orbit uses a file-system based routing mechanism with support for static paths, nested segments, and catch-all routes.",
    crumbs: ["Documentation", "Core Concepts", "Routing"],
    blocks: [
      { type: "heading", id: "overview", text: "Overview" },
      { type: "paragraph", text: "Every directory inside the `app` directory maps directly to a matching URL path segment. When an incoming request reaches your edge cluster, Orbit analyzes the matching segment tree and evaluates each layout node before rendering leaf page handlers." },
      { type: "paragraph", text: "Route resolution runs deterministically with zero runtime regex overhead. Leaf pages are defined via `page.tsx` or `route.ts`." },
      { type: "callout", variant: "info", title: "Convention Note", text: "Orbit reserves system file identifiers including layout.tsx, loading.tsx, and error.tsx to isolate lifecycle trees." },
      { type: "heading", id: "catch-all-routes", text: "Catch-all Routes" },
      { type: "paragraph", text: "Dynamic segments can be extended to catch all subsequent URL segments by prepending an ellipsis inside square brackets: `[...slug]`. The matched parameters are parsed into an array of path parts." },
      { type: "code", filename: "app/[...slug]/page.tsx", code: "export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {\n  const { slug } = await params;\n  return <div>Path: {slug.join('/')}</div>;\n}" },
      { type: "table", head: ["Route path pattern", "Example URL", "Params object"], rows: [
        ["app/shop/[...slug]/page.tsx", "/shop/clothes", "{ slug: ['clothes'] }"],
        ["app/shop/[...slug]/page.tsx", "/shop/clothes/tops", "{ slug: ['clothes', 'tops'] }"],
      ]},
      { type: "heading", id: "route-groups", text: "Route Groups" },
      { type: "paragraph", text: "Folders wrapped with parentheses, such as `(marketing)` or `(dashboard)`, serve purely as organizational conventions and are omitted from the final URL path resolution." },
    ],
  },
  {
    slug: ["core-concepts", "routing", "dynamic-routes"], title: "Dynamic Routes",
    description: "Learn how to define dynamic route segments and handle catch-all parameters in nested application architectures.",
    crumbs: ["Documentation", "Core Concepts", "Routing", "Dynamic Routes"],
    blocks: [
      { type: "callout", variant: "info", title: "Prerequisite Knowledge", text: "In Orbit's route resolution, dynamic segments are evaluated at request time and are never inlined as opaque parameters." },
      { type: "heading", id: "creating-the-segment-folder", text: "Creating the segment folder" },
      { type: "paragraph", text: "A dynamic segment is created by wrapping a folder name in square brackets, like `[id]` or `[slug]`." },
      { type: "code", filename: "app/products/[id]/page.tsx", code: "export default async function Page({ params }: { params: Promise<{ id: string }> }) {\n  const { id } = await params;\n  return <h1>Product {id}</h1>;\n}" },
      { type: "heading", id: "accessing-route-parameters", text: "Accessing route parameters" },
      { type: "table", head: ["Route file", "Example URL", "Resolved params"], rows: [
        ["app/docs/[id]/page.tsx", "/docs/hello-world", "{ id: 'hello-world' }"],
        ["app/shop/[category]/[item]/page.tsx", "/shop/shoes/runner", "{ category: 'shoes', item: 'runner' }"],
      ]},
      { type: "heading", id: "handling-optional-catch-all", text: "Handling optional catch-all segments" },
      { type: "paragraph", text: "Use `[[...slug]]` when the same route should also match its parent path. The slug is `undefined` at the root." },
      { type: "heading", id: "providing-fallback-behavior", text: "Providing fallback behavior" },
      { type: "callout", variant: "warning", title: "Safety Tip", text: "Never serve an unvalidated dynamic parameter directly into a database query. Validate it first, then call notFound() for anything unknown." },
    ],
  },
  {
    slug: ["core-concepts", "layouts"], title: "Layouts",
    description: "Share UI across routes with nested layouts that preserve state on navigation.",
    crumbs: ["Documentation", "Core Concepts", "Layouts"],
    blocks: [
      { type: "heading", id: "nested-layouts", text: "Nested layouts" },
      { type: "paragraph", text: "A `layout.tsx` wraps every page beneath it. Layouts do not re-render when navigating between sibling pages." },
    ],
  },
  {
    slug: ["core-concepts", "data-fetching"], title: "Data Fetching",
    description: "Load data on the server with async components and stream it with Suspense.",
    crumbs: ["Documentation", "Core Concepts", "Data Fetching"],
    blocks: [
      { type: "heading", id: "server-components", text: "Server components" },
      { type: "paragraph", text: "Server components can be `async`. Await your data directly and wrap slow sections in `Suspense` to stream them." },
    ],
  },
  {
    slug: ["reference", "configuration"], title: "Configuration",
    description: "Every option available in orbit.config.ts.",
    crumbs: ["Documentation", "Reference", "Configuration"],
    blocks: [
      { type: "heading", id: "config-file", text: "Config file" },
      { type: "code", filename: "orbit.config.ts", code: "export default {\n  routes: { trailingSlash: false },\n  strict: true,\n};" },
      { type: "table", head: ["Option", "Type", "Default"], rows: [
        ["routes.trailingSlash", "boolean", "false"],
        ["strict", "boolean", "true"],
      ]},
    ],
  },
  {
    slug: ["reference", "cli-commands"], title: "CLI Commands",
    description: "Commands and flags available in orbit-cli.",
    crumbs: ["Documentation", "Reference", "CLI Commands"],
    blocks: [
      { type: "heading", id: "commands", text: "Commands" },
      { type: "table", head: ["Command", "What it does"], rows: [
        ["orbit-cli create", "Scaffold a new project"],
        ["orbit-cli verify --path", "Check a path against the route manifest"],
        ["orbit sync --manifest", "Rebuild the route manifest"],
      ]},
    ],
  },
];

export const guides: Guide[] = [
  { id: "first-app", title: "Build your first Orbit app", summary: "Scaffold, run, and deploy a small site in about ten minutes.", level: "Beginner", readTime: "10 min", docSlug: ["getting-started", "installation"] },
  { id: "nested-routing", title: "Nested routing in practice", summary: "Combine dynamic, catch-all, and grouped routes without conflicts.", level: "Intermediate", readTime: "15 min", docSlug: ["core-concepts", "routing"] },
  { id: "safe-params", title: "Validating route parameters", summary: "Handle unknown slugs gracefully and avoid unsafe lookups.", level: "Advanced", readTime: "12 min", docSlug: ["core-concepts", "routing", "dynamic-routes"] },
];
