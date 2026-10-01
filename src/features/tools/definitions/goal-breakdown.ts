import { Target } from "lucide-react";

import { orPlaceholder } from "../lib/values";
import type { ToolDefinition } from "../types";

export const goalBreakdown: ToolDefinition = {
  id: "goal-breakdown",
  title: "Goal Breakdown",
  summary: "Move from a meaningful outcome to the next useful action.",
  icon: Target,
  fields: [
    { key: "goal", label: "Big goal", multiline: true, placeholder: "What outcome matters?" },
    { key: "why", label: "Why it matters", multiline: true },
    { key: "success", label: "Success evidence", multiline: true, placeholder: "What would show this is working?" },
    { key: "date", label: "Target date (optional)", type: "date" },
    { key: "resources", label: "Resources and advantages", multiline: true },
    { key: "obstacles", label: "Obstacles", multiline: true },
  ],
  note: "Treat the plan as a working hypothesis. AI can structure it. The goal and the commitment stay yours.",
  buildOutput: (v) => `# ${v.goal?.trim() || "Goal breakdown"}

Why it matters: ${orPlaceholder(v.why, "add why")}
Success evidence: ${orPlaceholder(v.success, "define visible evidence")}
Target: ${orPlaceholder(v.date, "optional")}

## Target milestone
[What must be true by the target]

## This month
[One meaningful milestone]

## This week
[One deliverable and its dependency]

## Tomorrow
[Smallest useful action]

Obstacle: ${orPlaceholder(v.obstacles, "name the obstacle")}
Resources and advantages: ${orPlaceholder(v.resources, "add resources")}

Review: [When you will check whether the metric moved]`,
};
