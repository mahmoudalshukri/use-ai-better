import { X } from "lucide-react";

import { BlockerPickerInput } from "../components/inputs/blocker-picker-input";
import { orPlaceholder, parseList } from "../lib/values";
import type { ToolDefinition } from "../types";

export const productivityBlockers: ToolDefinition = {
  id: "productivity-blockers",
  title: "Productivity Blockers",
  summary: "Choose your top blockers and one intervention to test.",
  icon: X,
  Input: BlockerPickerInput,
  buildOutput: (v) => {
    const blockers = parseList(v.blockers);
    return `# Blocker experiment

Top blockers: ${blockers.length ? blockers.join(", ") : "[choose up to three]"}

Intervention to try: ${orPlaceholder(v.change, "choose one small change")}

Observation for this week: What happened before and after the intervention?`;
  },
};
