import { ClipboardCheck } from "lucide-react";

import { orPlaceholder } from "../lib/values";
import type { ToolDefinition } from "../types";

export const weeklyReview: ToolDefinition = {
  id: "weekly-review",
  title: "Weekly Review",
  summary: "Reflect on evidence from the week and choose next focus.",
  icon: ClipboardCheck,
  fields: [
    { key: "achievement", label: "Main achievement", multiline: true },
    { key: "learning", label: "Key learning", multiline: true },
    { key: "blocked", label: "Blocker", multiline: true },
    { key: "progress", label: "Progress evidence", multiline: true },
    { key: "changed", label: "What changed", multiline: true },
    { key: "next", label: "Next focus", multiline: true },
  ],
  buildOutput: (v) => `# Weekly review

Main achievement: ${orPlaceholder(v.achievement, "add")}
Key learning: ${orPlaceholder(v.learning, "add")}
Blocker: ${orPlaceholder(v.blocked, "add")}
Progress evidence: ${orPlaceholder(v.progress, "add evidence")}
What changed: ${orPlaceholder(v.changed, "add")}

## Next focus
${orPlaceholder(v.next, "choose one focus")}`,
};
