import { Code } from "lucide-react";

import { orPlaceholder } from "../lib/values";
import type { ToolDefinition } from "../types";

export const codingTaskBrief: ToolDefinition = {
  id: "coding-task-brief",
  title: "Coding Task Brief",
  summary: "Turn a change into a brief a coding agent can follow.",
  icon: Code,
  fields: [
    { key: "project", label: "Project" },
    { key: "stack", label: "Stack" },
    { key: "change", label: "Requested change", multiline: true },
    { key: "current", label: "Current behavior", multiline: true },
    { key: "desired", label: "Desired behavior", multiline: true },
    { key: "constraints", label: "Constraints", multiline: true },
    { key: "files", label: "Relevant files", multiline: true },
    { key: "acceptance", label: "Acceptance criteria", multiline: true },
    { key: "tests", label: "Tests", multiline: true },
    { key: "nongoals", label: "Non-goals", multiline: true },
  ],
  note: "Do not modify unrelated code, and do not weaken lint, type, or test checks.",
  buildOutput: (v) => `# Coding task brief

Project: ${orPlaceholder(v.project, "project")}
Stack: ${orPlaceholder(v.stack, "stack")}

## Requested change
${orPlaceholder(v.change, "what should change")}

## Current behavior
${orPlaceholder(v.current, "what happens now")}

## Desired behavior
${orPlaceholder(v.desired, "what should happen")}

## Constraints
${orPlaceholder(v.constraints, "limits")}

## Relevant files
${orPlaceholder(v.files, "files")}

## Acceptance criteria
${orPlaceholder(v.acceptance, "how you will know it is done")}

## Tests
${orPlaceholder(v.tests, "checks to run")}

## Non-goals
${orPlaceholder(v.nongoals, "what not to change")}

Do not modify unrelated code. Do not weaken lint, types, or tests.`,
};
