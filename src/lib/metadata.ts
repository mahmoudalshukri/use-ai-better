import type { Metadata } from "next";

import { formatTitle, siteConfig } from "@/config/site";

type OpenGraphType = "website" | "article";

const { socialImage } = siteConfig;

function socialImages() {
  if (!socialImage.available) return undefined;
  return [{ url: socialImage.path, width: socialImage.width, height: socialImage.height, alt: socialImage.alt }];
}

/** Defaults inherited by every route, including ones without their own metadata. */
export function siteSocialDefaults(): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: siteConfig.seoTitle,
      description: siteConfig.description,
      images: socialImages(),
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.seoTitle,
      description: siteConfig.description,
      images: socialImages(),
    },
  };
}

type PageMetadataInput = {
  title: string;
  description: string;
  /** Route path used for the canonical URL and og:url. Resolved against metadataBase. */
  path: `/${string}`;
  /** Use the title as-is instead of applying the site title template. */
  absoluteTitle?: boolean;
  type?: OpenGraphType;
};

/**
 * Page metadata with canonical, Open Graph, and X card fields. Next.js replaces
 * nested `openGraph` and `twitter` objects rather than merging them, so the
 * shared fields are repeated here.
 */
export function pageMetadata({ title, description, path, absoluteTitle = false, type = "website" }: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : formatTitle(title);
  const images = socialImages();
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
  };
}

/** Lowercases the first letter unless it starts an acronym such as "AI". */
export function lowerFirst(text: string): string {
  return /^[A-Z](?![A-Z])/.test(text) ? text.charAt(0).toLowerCase() + text.slice(1) : text;
}
