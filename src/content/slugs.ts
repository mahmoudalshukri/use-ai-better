/** Stable ids shared by content records and typed relationships. */
export const PLAYBOOK_SLUGS = [
  "ai-socratic-tutor",
  "learn-by-teaching",
  "deep-research-workflow",
  "meeting-decisions-actions",
  "high-leverage-critique",
  "plan-feature-safely",
  "debug-without-guessing",
  "goal-breakdown",
  "human-in-the-loop-automation",
  "direction-through-experiments",
] as const;

export const PROMPT_SLUGS = [
  "concept-explainer",
  "socratic-tutor",
  "study-planner",
  "flashcard-generator",
  "clear-email",
  "meeting-summarizer",
  "checklist-creator",
  "idea-generator",
  "constructive-critic",
  "research-planner",
  "transparent-comparison",
  "pre-mortem",
  "function-generator",
  "code-debugger",
  "code-explainer",
  "code-review",
  "documentation-generator",
  "technical-planner",
  "tech-stack-explorer",
  "coding-prompt-builder",
  "goal-breakdown",
  "task-prioritizer",
  "travel-planner",
  "handyman-troubleshooter",
  "dictation-cleaner",
] as const;

export const LESSON_SLUGS = [
  "how-llms-work",
  "accelerated-learning",
  "work-with-ai",
  "everyday-automation",
  "choosing-tools",
  "better-coder",
  "better-prompting",
  "achieve-more",
  "go-faster",
  "go-further",
  "right-direction",
  "verification",
  "practical-workflow",
] as const;

export type PlaybookSlug = (typeof PLAYBOOK_SLUGS)[number];
export type PromptSlug = (typeof PROMPT_SLUGS)[number];
export type LessonSlug = (typeof LESSON_SLUGS)[number];
