import { Gauge } from "lucide-react";

import { orPlaceholder } from "../lib/values";
import type { ToolDefinition } from "../types";

export const energyMatching: ToolDefinition = {
  id: "energy-matching",
  title: "Energy Matching",
  summary: "Place work against your actual energy patterns.",
  icon: Gauge,
  fields: [
    {
      key: "peak",
      label: "Peak energy period and task types",
      multiline: true,
      placeholder: "e.g. mornings: writing, analysis",
    },
    { key: "medium", label: "Medium energy period and task types", multiline: true },
    { key: "low", label: "Low energy period and task types", multiline: true },
    { key: "experiment", label: "One scheduling experiment", multiline: true, placeholder: "What will you try this week?" },
  ],
  note: "Treat this as an observed map, not a permanent identity.",
  buildOutput: (v) => `# Personal energy map

## Peak energy
${orPlaceholder(v.peak, "period and demanding task types")}

## Medium energy
${orPlaceholder(v.medium, "period and collaborative or moderate task types")}

## Low energy
${orPlaceholder(v.low, "period and routine or admin task types")}

## Scheduling experiment
${orPlaceholder(v.experiment, "one change to try this week")}

Notice what changes. Revise the map if the pattern does not hold.`,
};
