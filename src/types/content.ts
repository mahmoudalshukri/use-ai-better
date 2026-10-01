import type { USE_CASE_CATEGORIES } from "@/content/categories";
import type { LessonSlug, PlaybookSlug, PromptSlug } from "@/content/slugs";
import type { ToolId } from "@/content/tool-ids";

export type UseCaseCategory = (typeof USE_CASE_CATEGORIES)[number]["name"];

/**
 * A practical AI workflow. `task`, `capability`, and `verification`
 * are product filters for Discover. They are not course claims.
 */
export type UseCase = {
  slug: string;
  title: string;
  description: string;
  category: UseCaseCategory;
  bestFor: string;
  outcome: string;
  whatYouNeed: string[];
  workflow: string[];
  starterPrompt: string;
  verify: string;
  relatedPlaybooks: PlaybookSlug[];
  /** Zero or one interactive tool. */
  relatedTools: ToolId[];
  relatedPrompts: PromptSlug[];
  relatedLessons: LessonSlug[];
  task: string;
  capability: string;
  verification: string;
  tags: string[];
};

export type Playbook = {
  slug: PlaybookSlug;
  title: string;
  intro: string;
  category: string;
  outcome: string;
  bestFor: string;
  need: string[];
  steps: string[];
  produce: string;
  failure: string;
  verify: string;
  example: string;
  prompt: string;
};

export type PromptTemplate = {
  slug: PromptSlug;
  title: string;
  category: string;
  outcome: string;
  when: string;
  variables: string[];
  prompt: string;
  why: string;
  verify: string;
};

export type Lesson = {
  slug: LessonSlug;
  title: string;
  summary: string;
  takeaway: string;
};
