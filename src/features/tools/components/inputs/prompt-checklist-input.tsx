"use client";

import { useId } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { promptPrinciples } from "@/content/prompt-principles";

import { parseList, serializeList } from "../../lib/values";
import type { ToolInputProps } from "../../types";

export function PromptChecklistInput({ values, setValue }: ToolInputProps) {
  const idPrefix = useId();
  const checked = parseList(values.checked);

  const toggle = (title: string, isChecked: boolean) => {
    const next = isChecked
      ? promptPrinciples.map((item) => item.title).filter((item) => item === title || checked.includes(item))
      : checked.filter((item) => item !== title);
    setValue("checked", serializeList(next));
  };

  return (
    <ul className="space-y-2">
      {promptPrinciples.map((principle, index) => {
        const id = `${idPrefix}-${index}`;
        return (
          <li key={principle.title}>
            <Label
              htmlFor={id}
              className="flex items-start gap-3 rounded-lg border p-3 text-sm leading-snug font-normal transition-colors hover:bg-muted/60 has-data-[state=checked]:border-primary/40 has-data-[state=checked]:bg-secondary"
            >
              <Checkbox
                id={id}
                checked={checked.includes(principle.title)}
                onCheckedChange={(state) => toggle(principle.title, state === true)}
                className="mt-0.5"
              />
              <span>
                <span className="font-semibold text-foreground">{principle.title}</span>
                <span className="mt-1 block text-muted-foreground">{principle.detail}</span>
              </span>
            </Label>
          </li>
        );
      })}
    </ul>
  );
}
