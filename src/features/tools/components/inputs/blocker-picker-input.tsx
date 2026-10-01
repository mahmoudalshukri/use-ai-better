"use client";

import { FormField } from "@/components/shared/form-field";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { parseList, serializeList } from "../../lib/values";
import type { ToolInputProps } from "../../types";

const MAX_BLOCKERS = 3;

const BLOCKERS = [
  "Social media",
  "Email",
  "Notifications",
  "Task switching",
  "Fear of failure",
  "Perfectionism",
  "Energy",
  "Requests from others",
  "Lack of purpose",
  "Inability to say no",
  "Sleep",
  "Communication barriers",
  "Unrealistic planning",
  "Decision fatigue",
  "Environment",
  "Skill gaps",
  "Burnout",
];

export function BlockerPickerInput({ values, setValue }: ToolInputProps) {
  const selected = parseList(values.blockers);
  const atLimit = selected.length >= MAX_BLOCKERS;

  return (
    <div>
      <p className="mb-3 text-sm text-muted-foreground">
        Choose up to three blockers to examine.{" "}
        <span className="font-medium text-foreground">
          {selected.length}/{MAX_BLOCKERS} selected
        </span>
      </p>
      <ToggleGroup
        type="multiple"
        variant="outline"
        spacing={2}
        value={selected}
        onValueChange={(next) => {
          if (next.length <= MAX_BLOCKERS) setValue("blockers", serializeList(next));
        }}
        className="grid w-full grid-cols-1 sm:grid-cols-2"
        aria-label="Productivity blockers"
      >
        {BLOCKERS.map((blocker) => (
          <ToggleGroupItem
            key={blocker}
            value={blocker}
            disabled={atLimit && !selected.includes(blocker)}
            className="h-auto justify-start rounded-lg px-3 py-2.5 text-left whitespace-normal data-[state=on]:border-primary data-[state=on]:bg-secondary data-[state=on]:font-semibold"
          >
            {blocker}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="mt-6">
        <FormField
          label="One small change this week"
          value={values.change ?? ""}
          onChange={(value) => setValue("change", value)}
          multiline
        />
      </div>
    </div>
  );
}
