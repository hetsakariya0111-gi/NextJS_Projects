# Orbit Docs

A polished documentation portal for Orbit, a fictional server-first web framework. Browse framework guides and API-style references through a responsive docs layout with searchable articles, dynamic routes, and light and dark themes.

> **Note:** Orbit's documentation content is sample data included in this frontend project. This repository contains the documentation experience; it does not include or install an Orbit framework or CLI.

## Features

- **Structured documentation** organized into Getting Started, Core Concepts, and Reference sections
- **Article navigation** with nested routes, breadcrumbs, previous/next links, and an on-page table of contents
- **Documentation search** from the header
- **Practical guides** with difficulty and estimated reading time
- **Rich content blocks** for headings, code samples, callouts, and tables
- **Responsive interface** with a collapsible-at-small-screens sidebar layout
- **Light and dark themes**, including system theme support
- **Helpful not-found and error states** for unknown routes and rendering errors
- **Static generation** for the documentation articles and guides in the sample dataset

## Routes

| Route | Description |
| --- | --- |
| `/` | Redirects to the documentation overview |
| `/docs` | Documentation landing page |
| `/docs/[...slug]` | Documentation articles, such as `/docs/core-concepts/routing` |
| `/guides` | Guide index |
| `/guides/[id]` | Guide details, such as `/guides/first-app` |
| `/about` | About Orbit and this documentation |
| Any unknown route | Custom not-found experience |

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Lucide](https://lucide.dev/) icons
- [next-themes](https://github.com/pacocoursey/next-themes) for theme switching

## Getting Started

### Prerequisites

- Node.js 20.9 or later
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

```bash
npm run dev    # Start the development server
npm run lint   # Run ESLint
npm run build  # Create an optimized production build
npm start      # Serve the production build (run after npm run build)
```

## Project Structure

```text
src/
|-- app/                        # Documentation, guides, and shared layouts
|   |-- (docs)/                 # Documentation layout and catch-all article route
|   |-- (site)/                 # About and guide pages
|   |-- error.tsx               # App-level error boundary
|   |-- globals.css             # Global styles and theme tokens
|   |-- layout.tsx              # Root layout, metadata, and theme provider
|   |-- not-found.tsx           # Custom not-found page
|   `-- page.tsx                # Redirects to /docs
|-- components/
|   |-- layout/                 # Header, sidebar, table of contents, and page layout
|   `-- ui/                     # Reusable documentation content renderers
|-- data/
|   `-- dummyData.ts            # Sample documentation, navigation, and guides
|-- lib/
|   `-- docs.ts                 # Documentation and guide lookup helpers
`-- types/
    └── index.ts                # Shared TypeScript types
```

## Content and Routing

The documentation articles, navigation tree, and guides are defined in `src/data/dummyData.ts`. Lookup helpers in `src/lib/docs.ts` resolve articles and guides from their route parameters. The docs and guide routes generate static parameters from that sample content, and unknown slugs render the custom not-found page.

To add an article, add a typed entry to the `docs` collection and include it in the `navigation` data. To add a guide, add an entry to `guides` with its ID, summary, metadata, and related documentation slug.
