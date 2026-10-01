import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/config/site-url";
import { getPlaybooks } from "@/features/playbooks/queries";
import { getPrompts } from "@/features/prompts/queries";
import { getTools } from "@/features/tools/registry";
import { getUseCases } from "@/features/use-cases/queries";

const STATIC_PATHS = [
  "/",
  "/discover",
  "/playbooks",
  "/tools",
  "/prompts",
  "/builder",
  "/learn",
  "/about",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: `/${string}`[] = [
    ...STATIC_PATHS,
    ...getUseCases().map((useCase) => `/use-cases/${useCase.slug}` as const),
    ...getPlaybooks().map((playbook) => `/playbooks/${playbook.slug}` as const),
    ...getTools().map((tool) => `/tools/${tool.id}` as const),
    ...getPrompts().map((prompt) => `/prompts/${prompt.slug}` as const),
  ];
  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
