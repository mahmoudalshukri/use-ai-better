"use client";

import { useCallback, useMemo } from "react";

import { CodeBlock } from "@/components/shared/code-block";
import { CopyButton } from "@/components/shared/copy-button";
import { FormField } from "@/components/shared/form-field";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLocalDraft } from "@/hooks/use-local-draft";

import { getToolById } from "../registry";
import type { ToolValues } from "../types";

const EMPTY_VALUES: ToolValues = {};

export function ToolWorkspace({ toolId }: { toolId: string }) {
  const tool = getToolById(toolId);
  const [values, setValues, resetValues] = useLocalDraft<ToolValues>(`ai-age-tool-${toolId}`, EMPTY_VALUES);

  const setValue = useCallback(
    (key: string, value: string) => setValues((previous) => ({ ...previous, [key]: value })),
    [setValues],
  );
  const output = useMemo(() => tool?.buildOutput(values) ?? "", [tool, values]);

  if (!tool) return null;
  const CustomInput = tool.Input;

  return (
    <div className="grid gap-4 md:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <Card className="gap-0 p-5 md:p-7">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-heading text-xl font-bold">Your inputs</h2>
          <span className="font-mono text-xs text-muted-foreground">Draft only</span>
        </div>
        <Separator className="my-5 md:my-6" />

        {CustomInput ? (
          <CustomInput values={values} setValue={setValue} />
        ) : (
          <div className="space-y-5">
            {tool.fields?.map((field) => (
              <FormField
                key={field.key}
                label={field.label}
                value={values[field.key] ?? ""}
                onChange={(value) => setValue(field.key, value)}
                multiline={field.multiline}
                type={field.type}
                placeholder={field.placeholder}
              />
            ))}
          </div>
        )}

        {tool.note && <p className="mt-4 text-xs text-muted-foreground">{tool.note}</p>}

        <Button variant="outline" size="lg" className="mt-7 self-start" onClick={resetValues}>
          Clear draft
        </Button>
      </Card>

      <Card className="gap-0 p-5 md:p-7 lg:sticky lg:top-24">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-primary">Working output</p>
            <h2 className="mt-1 font-heading text-xl font-bold">Use this as material</h2>
          </div>
          <CopyButton text={output} label="Copy Markdown" copiedLabel="Copied" size="sm" />
        </div>
        <CodeBlock className="mt-6 min-h-80" aria-live="polite">
          {output}
        </CodeBlock>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          This tool keeps an unfinished draft in this browser only. Copy or export anything you want to keep.
        </p>
      </Card>
    </div>
  );
}
