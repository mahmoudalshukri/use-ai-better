import { prompts } from "@/content/prompts";
import type { PromptTemplate } from "@/types/content";

export function getPrompts(): PromptTemplate[] {
  return prompts;
}

export function getPromptBySlug(slug: string): PromptTemplate | undefined {
  return prompts.find((prompt) => prompt.slug === slug);
}
