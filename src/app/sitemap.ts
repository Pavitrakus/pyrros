import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.PUBLIC_SITE_URL ?? "https://pyrros.vercel.app";
  return ["", "/story", "/grants", "/people"].map(path => ({ url: `${base}${path}`, lastModified: new Date() }));
}
