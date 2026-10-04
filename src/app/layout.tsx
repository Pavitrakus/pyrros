import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./brand.css";

const siteUrl = process.env.PUBLIC_SITE_URL ?? "https://pyrros.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Pyrros | Backing the first move", template: "%s | Pyrros" },
  description: "Pyrros, formerly ByteForge, backs young builders with small grants, serious rooms, and the freedom to make something real. Born in Kanpur.",
  openGraph: {
    title: "Pyrros | Backing the first move",
    description: "Small grants. Serious rooms. Young builders. Born in Kanpur.",
    type: "website",
    images: [{ url: "/pyrros/hero.png", width: 1536, height: 1024, alt: "A bronze hand holds a glowing ember over a workbench" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
