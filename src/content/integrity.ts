import { lessons } from "@/content/lessons";
import { playbooks } from "@/content/playbooks";
import { prompts } from "@/content/prompts";
import { LESSON_SLUGS, PLAYBOOK_SLUGS, PROMPT_SLUGS } from "@/content/slugs";
import { TOOL_IDS } from "@/content/tool-ids";
import { useCases } from "@/content/use-cases";

function unique<T extends string>(values: readonly T[], label: string, problems: string[]) {
  const seen = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) problems.push(`Duplicate ${label}: ${value}`);
    seen.add(value);
  }
}

/** Throws during build or render if a relationship or slug list is wrong. */
export function assertContentIntegrity() {
  const problems: string[] = [];
  const playbookSlugs = new Set(playbooks.map((item) => item.slug));
  const promptSlugs = new Set(prompts.map((item) => item.slug));
  const lessonSlugs = new Set(lessons.map((item) => item.slug));
  const toolIds = new Set<string>(TOOL_IDS);

  unique(useCases.map((item) => item.slug), "use case slug", problems);
  unique(playbooks.map((item) => item.slug), "playbook slug", problems);
  unique(prompts.map((item) => item.slug), "prompt slug", problems);
  unique(lessons.map((item) => item.slug), "lesson slug", problems);

  if (playbooks.length !== PLAYBOOK_SLUGS.length || PLAYBOOK_SLUGS.some((slug) => !playbookSlugs.has(slug))) {
    problems.push("Playbook records do not match PLAYBOOK_SLUGS.");
  }
  if (prompts.length !== PROMPT_SLUGS.length || PROMPT_SLUGS.some((slug) => !promptSlugs.has(slug))) {
    problems.push("Prompt records do not match PROMPT_SLUGS.");
  }
  if (lessons.length !== LESSON_SLUGS.length || LESSON_SLUGS.some((slug) => !lessonSlugs.has(slug))) {
    problems.push("Lesson records do not match LESSON_SLUGS.");
  }

  for (const useCase of useCases) {
    const where = useCase.slug;
    if (useCase.relatedPlaybooks.length < 1 || useCase.relatedPlaybooks.length > 2) {
      problems.push(`${where}: expected 1–2 playbooks`);
    }
    if (useCase.relatedTools.length > 1) problems.push(`${where}: expected at most 1 tool`);
    if (useCase.relatedPrompts.length < 1 || useCase.relatedPrompts.length > 2) {
      problems.push(`${where}: expected 1–2 prompts`);
    }
    if (useCase.relatedLessons.length < 1 || useCase.relatedLessons.length > 2) {
      problems.push(`${where}: expected 1–2 lessons`);
    }
    for (const slug of useCase.relatedPlaybooks) {
      if (!playbookSlugs.has(slug)) problems.push(`${where}: missing playbook ${slug}`);
    }
    for (const slug of useCase.relatedPrompts) {
      if (!promptSlugs.has(slug)) problems.push(`${where}: missing prompt ${slug}`);
    }
    for (const slug of useCase.relatedLessons) {
      if (!lessonSlugs.has(slug)) problems.push(`${where}: missing lesson ${slug}`);
    }
    for (const id of useCase.relatedTools) {
      if (!toolIds.has(id)) problems.push(`${where}: missing tool ${id}`);
    }
    if (useCase.workflow.length < 2) problems.push(`${where}: workflow is too thin`);
    if (!useCase.starterPrompt.trim() || !useCase.verify.trim() || !useCase.bestFor.trim()) {
      problems.push(`${where}: missing detail copy`);
    }
  }

  if (problems.length > 0) {
    throw new Error(`Content integrity failed:\n${problems.join("\n")}`);
  }
}
