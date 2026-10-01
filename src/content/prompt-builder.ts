/**
 * Content model for Adaptive Prompt Builder V2.
 * This is schema and copy only. V1 does not call a model or generate prompts.
 */

export const BUILDER_TARGETS = [
  "General AI",
  "ChatGPT",
  "Claude",
  "Gemini",
  "Cursor",
  "Replit",
  "Other",
] as const;

export const BUILDER_COMMON_FIELDS = [
  "Objective",
  "Context",
  "Audience",
  "Inputs and source material",
  "Requirements",
  "Constraints",
  "Output format",
  "Examples",
  "Verification",
  "Non-goals",
] as const;

/** Included in a generated prompt only when that section adds information. */
export const BUILDER_SECTIONS = [
  "ROLE",
  "OBJECTIVE",
  "CONTEXT",
  "INPUTS",
  "REQUIREMENTS",
  "CONSTRAINTS",
  "PROCESS",
  "OUTPUT FORMAT",
  "EXAMPLES",
  "VERIFICATION",
  "DEFINITION OF DONE",
  "NON-GOALS",
] as const;

export const BUILDER_INTENTS = [
  {
    id: "learning",
    label: "Learning",
    questions: [
      "What topic are you learning?",
      "What is your current level?",
      "What should you be able to do afterward?",
      "Which method helps: explain, question, practice, or critique?",
      "What source material should the model stay inside?",
      "How will you test understanding?",
    ],
  },
  {
    id: "research",
    label: "Research",
    questions: [
      "What is the question?",
      "What decision or purpose is the research for?",
      "What is in scope, including dates and geography?",
      "What source standard applies?",
      "What criteria matter?",
      "When should research stop?",
    ],
  },
  {
    id: "writing",
    label: "Writing",
    questions: [
      "What artifact are you creating?",
      "Who is the audience?",
      "What is the purpose?",
      "What tone is appropriate?",
      "Which facts must be included, and which must not be invented?",
      "What length or format is required?",
    ],
  },
  {
    id: "decision",
    label: "Decision",
    questions: [
      "What problem or options are you comparing?",
      "What criteria matter?",
      "What constraints apply?",
      "What evidence do you already have?",
      "What is still unknown?",
      "Do you need a comparison, alternatives, or both?",
    ],
  },
  {
    id: "brainstorm",
    label: "Brainstorm",
    questions: [
      "What kind of ideas do you need?",
      "Who are they for?",
      "What alternatives already exist?",
      "What should be excluded?",
      "What constraints and novelty bar apply?",
      "How will you evaluate the options?",
    ],
  },
  {
    id: "coding",
    label: "Coding",
    questions: [
      "Is this a new project or an existing one?",
      "What stack is in use?",
      "What is the current behavior, and what should it become?",
      "Which files, constraints, and conventions matter?",
      "What tests and definition of done apply?",
      "What is explicitly out of scope?",
    ],
  },
  {
    id: "automation",
    label: "Automation",
    questions: [
      "What triggers the work?",
      "What is the input?",
      "Which steps repeat?",
      "What output is required, and how often?",
      "Which systems are involved?",
      "Where is the risk, the human approval, and the failure path?",
    ],
  },
] as const;

export const builderCopy = {
  opening: "What are you trying to achieve?",
  placeholder: "Describe the result you want in your own words.",
  targetLabel: "Where will you use the prompt?",
  behavior: [
    "Detect the intent from the goal.",
    "Extract the context you already gave.",
    "Ask only for missing information that would change the result, one question at a time.",
    "Let you answer “I don’t know” or accept a sensible default.",
    "Stop when there is enough context.",
    "Generate a structured prompt that includes only the sections that add value.",
    "Show a short verification checklist.",
  ],
  emptySections: "Empty boilerplate sections are never shown.",
} as const;
