import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Campus Directory", template: "%s | Campus Directory" },
  description: "Browse students and departments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
          <Navbar />
          <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
