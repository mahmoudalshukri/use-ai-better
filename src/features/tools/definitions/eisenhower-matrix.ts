import { Grid2X2 } from "lucide-react";

import { EisenhowerMatrixInput } from "../components/inputs/eisenhower-matrix-input";
import { parseMatrixTasks, QUADRANTS } from "../lib/matrix";
import type { ToolDefinition } from "../types";

export const eisenhowerMatrix: ToolDefinition = {
  id: "eisenhower-matrix",
  title: "Eisenhower Matrix",
  summary: "Sort tasks by importance and urgency without losing nuance.",
  icon: Grid2X2,
  Input: EisenhowerMatrixInput,
  note: "Urgency is not the same as importance. Use the matrix to expose the difference, then make the judgment yourself.",
  buildOutput: (v) => {
    const tasks = parseMatrixTasks(v.tasks);
    const sections = QUADRANTS.map((quadrant) => {
      const items = tasks.filter((task) => task.quadrant === quadrant).map((task) => `- ${task.text}`);
      return `## ${quadrant}\n${items.join("\n") || "- [none]"}`;
    });
    return `# Eisenhower matrix\n\n${sections.join("\n\n")}`;
  },
};
