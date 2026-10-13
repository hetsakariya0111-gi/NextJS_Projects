import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Orbit Docs", template: "%s | Orbit Docs" },
  description: "Architecture guides and API references for the Orbit framework.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
