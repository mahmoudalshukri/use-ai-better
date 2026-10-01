/** Practical prompt-engineering checklist. Shared by Learn and the Prompt Checklist tool. */
export const promptPrinciples = [
  { title: "Clear objective", detail: "What should happen?" },
  { title: "Relevant context", detail: "What background changes the answer?" },
  { title: "Useful role", detail: "Would a perspective materially help?" },
  { title: "Requirements", detail: "What must be included?" },
  { title: "Constraints", detail: "What limits or exclusions apply?" },
  { title: "Output format", detail: "What shape should the result take?" },
  { title: "Multiple options", detail: "Is comparison better than the first plausible answer?" },
  { title: "Chained prompting", detail: "Should complex work be split into stages?" },
  { title: "Examples and delimiters", detail: "Would examples define quality? Is source data clearly separated?" },
  { title: "Verification", detail: "What must be checked, and against what?" },
  {
    title: "Clarify first",
    detail: "If missing information materially changes the answer, ask before the final result.",
  },
] as const;
