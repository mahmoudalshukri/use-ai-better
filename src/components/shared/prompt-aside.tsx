import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { CodeBlock } from "./code-block";
import { CopyButton } from "./copy-button";

/** Sticky sidebar card showing a reusable prompt with copy + Prompt Library actions. */
export function PromptAside({
  title,
  prompt,
  copyLabel = "Copy prompt",
}: {
  title: string;
  prompt: string;
  copyLabel?: string;
}) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <Card className="gap-0 p-5 md:p-6">
        <p className="text-sm font-semibold text-primary">{title}</p>
        <CodeBlock className="mt-4">{prompt}</CodeBlock>
        <CopyButton text={prompt} label={copyLabel} size="lg" className="mt-4 w-full" />
        <Button asChild size="lg" className="mt-2 w-full">
          <Link href="/prompts">
            Find more in the Prompt Library
            <ArrowUpRight data-icon="inline-end" />
          </Link>
        </Button>
      </Card>
    </aside>
  );
}
