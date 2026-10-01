export const homeCopy = {
  eyebrow: "Use AI Better",
  titleBefore: "Use AI with",
  titleAccent: "more intention.",
  body: "Find practical ways to learn faster, work better, think through problems, build software, plan goals, and automate repetitive work — with clear guidance on what AI should do and what you still need to verify.",
  primaryCta: "Find a use case",
  secondaryCta: "Build a prompt",
  exploreKicker: "Explore by goal",
  exploreTitle: "Start with the work, not the tool.",
  howKicker: "How it works",
  howTitle: "Know what to ask, how to work with AI, and what to verify before you act.",
  steps: [
    { title: "Define the outcome", copy: "Decide what useful looks like." },
    {
      title: "Give relevant context",
      copy: "Include background, constraints, audience, examples, and sources that change the answer.",
    },
    { title: "Work in steps", copy: "Explore, critique, refine, then produce the final result." },
    {
      title: "Verify before acting",
      copy: "Check facts, sources, code, calculations, safety, and commitments.",
    },
  ],
} as const;

export const goalStarterCopy = {
  kicker: "Start with your outcome",
  heading: "What are you trying to do?",
  placeholder:
    "Learn a difficult topic, prepare for a meeting, debug code, plan a project, compare options...",
  suggestions: ["Learn a difficult topic", "Prepare for a meeting", "Debug code", "Plan a project"],
  submit: "Find relevant use cases",
} as const;

export const learnCopy = {
  kicker: "Learn",
  title: "A practical sequence for working with AI.",
  description:
    "How models behave, how to learn and work with them, how to choose tools, prompt, plan, and verify before you act.",
  checklistTitle: "Prompt engineering checklist",
} as const;

export const aboutCopy = {
  kicker: "About",
  title: "A practical companion for working with AI.",
  description: "AI tools are easy to open and surprisingly difficult to use well.",
  challenge:
    "The challenge is not collecting more prompts. It is knowing what outcome you want, what context matters, how to structure the work, when to ask AI to question or critique you, and what still requires human verification.",
  product:
    "Use AI Better turns those principles into practical workflows for learning, work, research, coding, planning, productivity, and everyday tasks.",
  workspace:
    "It is intentionally not an account-based workspace. Start with a problem, follow a workflow, adapt the prompt, verify the result, and move on. Unfinished tool drafts stay in this browser so a refresh does not erase active work.",
  principlesTitle: "Principles",
  principles: [
    "AI extends human capability without removing human responsibility.",
    "Useful context matters more than clever wording.",
    "Complex work benefits from stages.",
    "Important output deserves verification.",
    "Good workflows transfer across AI tools.",
    "Human judgment remains in the loop.",
  ],
  sourceTitle: "Source note",
  source:
    "The product was developed from practical learning material about succeeding in the age of AI, prompt engineering, goal design, productivity, AI-assisted coding, and applied AI workflows. The website adapts those ideas into an independent practical reference rather than reproducing the course verbatim.",
} as const;
