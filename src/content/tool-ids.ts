/** Interactive tools in display order. Registry must match this list exactly. */
export const TOOL_IDS = [
  "goal-breakdown",
  "eisenhower-matrix",
  "daily-five",
  "energy-matching",
  "productivity-blockers",
  "weekly-review",
  "current-situation-review",
  "prompt-checklist",
  "coding-task-brief",
  "automation-mapper",
] as const;

export type ToolId = (typeof TOOL_IDS)[number];
