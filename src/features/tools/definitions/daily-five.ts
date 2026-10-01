import { ListChecks } from "lucide-react";

import { orPlaceholder } from "../lib/values";
import type { ToolDefinition } from "../types";

const MINOR_TASK_COUNT = 4;
const minorKeys = Array.from({ length: MINOR_TASK_COUNT }, (_, i) => `minor${i}`);

export const dailyFive: ToolDefinition = {
  id: "daily-five",
  title: "Daily Five",
  summary: "Choose one major task and up to four minor tasks.",
  icon: ListChecks,
  fields: [
    { key: "major", label: "Major task", placeholder: "The one task that makes today count" },
    ...minorKeys.map((key, i) => ({ key, label: `Minor task ${i + 1}` })),
  ],
  note: "The major task is the work that would make today meaningful even if the minor list remains incomplete.",
  buildOutput: (v) => `# Daily Five

## Major task
${orPlaceholder(v.major, "one major task")}

## Minor tasks
${minorKeys.map((key, i) => `${i + 1}. ${orPlaceholder(v[key], "optional")}`).join("\n")}

Completion rule: finish or deliberately reschedule; do not silently grow the list.`,
};
