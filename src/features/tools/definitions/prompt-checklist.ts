import { Check } from "lucide-react";

import { promptPrinciples } from "@/content/prompt-principles";

import { PromptChecklistInput } from "../components/inputs/prompt-checklist-input";
import { parseList } from "../lib/values";
import type { ToolDefinition } from "../types";

export const promptChecklist: ToolDefinition = {
  id: "prompt-checklist",
  title: "Prompt Checklist",
  summary: "Check that a prompt has an objective, context, constraints, and a way to verify it.",
  icon: Check,
  Input: PromptChecklistInput,
  buildOutput: (v) => {
    const checked = parseList(v.checked);
    const lines = promptPrinciples.map((principle) => {
      const mark = checked.includes(principle.title) ? "x" : " ";
      return `- [${mark}] ${principle.title} — ${principle.detail}`;
    });
    return `# Prompt checklist

${lines.join("\n")}

A prompt is a brief. If a missing detail would change the result, ask for it before the final answer.`;
  },
};
