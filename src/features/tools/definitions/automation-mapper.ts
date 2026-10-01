import { Workflow } from "lucide-react";

import { orPlaceholder } from "../lib/values";
import type { ToolDefinition } from "../types";

export const automationMapper: ToolDefinition = {
  id: "automation-mapper",
  title: "Automation Mapper",
  summary: "Map a repeated process from trigger to failure path.",
  icon: Workflow,
  fields: [
    { key: "trigger", label: "Trigger", multiline: true },
    { key: "inputs", label: "Inputs", multiline: true },
    { key: "steps", label: "Current steps", multiline: true },
    { key: "transformation", label: "AI transformation", multiline: true },
    { key: "validation", label: "Validation", multiline: true },
    { key: "approval", label: "Human approval", multiline: true },
    { key: "action", label: "Action", multiline: true },
    { key: "failure", label: "Failure path", multiline: true },
  ],
  note: "Keep irreversible, financial, and other high-stakes actions on the human side of the line.",
  buildOutput: (v) => `# Automation map

Trigger → ${orPlaceholder(v.trigger, "what starts this")}
Inputs → ${orPlaceholder(v.inputs, "what comes in")}
Current steps → ${orPlaceholder(v.steps, "what happens now")}
AI transformation → ${orPlaceholder(v.transformation, "the repeatable transformation")}
Validation → ${orPlaceholder(v.validation, "how errors are caught")}
Human approval → ${orPlaceholder(v.approval, "what a person must approve")}
Action → ${orPlaceholder(v.action, "what happens next")}
Failure path → ${orPlaceholder(v.failure, "what happens when it fails")}`,
};
