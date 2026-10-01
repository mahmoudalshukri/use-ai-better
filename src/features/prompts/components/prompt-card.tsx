import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { CategoryBadge } from "@/components/shared/category-badge";
import { CopyButton } from "@/components/shared/copy-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PromptTemplate } from "@/types/content";

export function PromptCard({ prompt }: { prompt: PromptTemplate }) {
  return (
    <Card className="card-interactive min-h-72 justify-between gap-5 p-5 md:p-6">
      <div>
        <div className="flex items-center justify-between">
          <CategoryBadge>{prompt.category}</CategoryBadge>
          <span className="font-mono text-xs text-muted-foreground">template</span>
        </div>
        <h2 className="mt-5 font-heading text-lg font-bold sm:text-xl">{prompt.title}</h2>
        <p className="mt-2 text-sm font-semibold">{prompt.outcome}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Useful when: {prompt.when}.</p>
      </div>
      <div className="flex gap-2">
        <Button asChild variant="outline" size="lg" className="flex-1">
          <Link href={`/prompts/${prompt.slug}`}>
            Read template
            <ArrowUpRight data-icon="inline-end" />
          </Link>
        </Button>
        <CopyButton text={prompt.prompt} iconOnly label={`Copy ${prompt.title}`} className="size-9" />
      </div>
    </Card>
  );
}
