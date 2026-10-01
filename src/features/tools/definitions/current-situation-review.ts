import { Brain } from "lucide-react";

import { orPlaceholder } from "../lib/values";
import type { ToolDefinition } from "../types";

export const currentSituationReview: ToolDefinition = {
  id: "current-situation-review",
  title: "Current Situation Review",
  summary: "Ask better questions about learning, skills, and the next experiment.",
  icon: Brain,
  fields: [
    { key: "learning", label: "What you are learning now", multiline: true },
    { key: "skills", label: "Skills that feel distinctive", multiline: true },
    { key: "goals", label: "Goals that are actually yours", multiline: true },
    { key: "gaps", label: "Skill gaps you can name", multiline: true },
    { key: "strengths", label: "Where your strengths could be used better", multiline: true },
    { key: "experiment", label: "Next experiment", multiline: true },
  ],
  note: "This review does not calculate a deterministic career score.",
  buildOutput: (v) => `# Current situation review

Learning: ${orPlaceholder(v.learning, "add")}
Distinctive skills: ${orPlaceholder(v.skills, "add")}
Personal goals: ${orPlaceholder(v.goals, "add")}
Skill gaps: ${orPlaceholder(v.gaps, "add")}
Better use of strengths: ${orPlaceholder(v.strengths, "add")}

## Next experiment
${orPlaceholder(v.experiment, "one small experiment")}

Do not turn this into a career score. Judge the experiment by what you observe.`,
};
