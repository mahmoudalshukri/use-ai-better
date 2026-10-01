export const siteConfig = {
  name: "Use AI Better",
  tagline: "Practical ways to use AI for better work, learning, thinking, and execution.",
  seoTitle: "Use AI Better · Practical AI workflows for work and learning",
  titleTemplate: "%s · Use AI Better",
  description:
    "Practical ways to use AI for better work, learning, thinking, and execution. Find use cases, playbooks, tools, and prompt patterns, and know what to verify.",
  keywords: [
    "AI workflows",
    "AI use cases",
    "prompt patterns",
    "AI playbooks",
    "learning with AI",
    "AI for work",
    "verifying AI output",
  ],
  locale: "en_US",
  /**
   * Shared 1200×630 preview for Open Graph and X. Add `public/og-image.png`,
   * then set `available` to true so pages start referencing it.
   */
  socialImage: {
    path: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Use AI Better: practical ways to use AI for better work, learning, thinking, and execution.",
    available: false,
  },
} as const;

export function formatTitle(title: string): string {
  return siteConfig.titleTemplate.replace("%s", title);
}
