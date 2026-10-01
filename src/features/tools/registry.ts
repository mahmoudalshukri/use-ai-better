import { TOOL_IDS } from "@/content/tool-ids";

import { automationMapper } from "./definitions/automation-mapper";
import { codingTaskBrief } from "./definitions/coding-task-brief";
import { currentSituationReview } from "./definitions/current-situation-review";
import { dailyFive } from "./definitions/daily-five";
import { eisenhowerMatrix } from "./definitions/eisenhower-matrix";
import { energyMatching } from "./definitions/energy-matching";
import { goalBreakdown } from "./definitions/goal-breakdown";
import { productivityBlockers } from "./definitions/productivity-blockers";
import { promptChecklist } from "./definitions/prompt-checklist";
import { weeklyReview } from "./definitions/weekly-review";
import type { ToolDefinition } from "./types";

/** Display order for the Tools page. Keep this aligned with TOOL_IDS. */
const tools: ToolDefinition[] = [
  goalBreakdown,
  eisenhowerMatrix,
  dailyFive,
  energyMatching,
  productivityBlockers,
  weeklyReview,
  currentSituationReview,
  promptChecklist,
  codingTaskBrief,
  automationMapper,
];

const registered = tools.map((tool) => tool.id);
if (
  registered.length !== TOOL_IDS.length ||
  TOOL_IDS.some((id, index) => registered[index] !== id)
) {
  throw new Error("Tool registry is out of sync with TOOL_IDS.");
}

export function getTools(): ToolDefinition[] {
  return tools;
}

export function getToolById(id: string): ToolDefinition | undefined {
  return tools.find((tool) => tool.id === id);
}
