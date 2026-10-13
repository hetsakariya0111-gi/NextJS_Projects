import { Sidebar } from "@/components/layout/Sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-[90rem]">
      <Sidebar />
      <main className="min-w-0 flex-1 px-6 py-10 lg:px-12">{children}</main>
    </div>
  );
}
