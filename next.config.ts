import type { NextConfig } from "next";

if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL?.trim()) {
  console.warn(
    "\n⚠ NEXT_PUBLIC_SITE_URL is not set. Canonical URLs, Open Graph, sitemap.xml, and robots.txt use the placeholder https://use-ai-better.example.\n",
  );
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
