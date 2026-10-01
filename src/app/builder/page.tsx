import { Layers3, Search } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ComingSoonBadge } from "@/components/shared/coming-soon-badge";
import { NumberedSteps } from "@/components/shared/numbered-steps";
import { PageContainer } from "@/components/shared/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BUILDER_INTENTS, BUILDER_SECTIONS, builderCopy } from "@/content/prompt-builder";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Adaptive Prompt Builder (Coming soon)",
  description:
    "A guided builder that will ask for the result you want, then the missing context, and produce a structured prompt. It is not available yet.",
  path: "/builder",
});

export default function BuilderPage() {
  return (
    <PageContainer>
      <PageHeader
        kicker="Prompt Builder"
        title="Adaptive Prompt Builder"
        description="It will start from the result you want, ask only for missing context, and write a structured prompt. It is not available yet."
        action={
          <div>
            <ComingSoonBadge className="h-7 px-3 text-sm" />
          </div>
        }
      />

      <div className="grid gap-6 md:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <section className="min-w-0">
          <h2 className="font-heading text-xl font-bold md:text-2xl">{builderCopy.opening}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {builderCopy.placeholder} {builderCopy.targetLabel} General AI, ChatGPT, Claude, Gemini, Cursor, Replit,
            or another tool. {builderCopy.emptySections}
          </p>
          <NumberedSteps steps={[...builderCopy.behavior]} />
          <div className="mt-8">
            <h3 className="font-heading text-lg font-bold">Prepared intents</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {BUILDER_INTENTS.map((intent) => (
                <li key={intent.id}>
                  <Badge variant="secondary" className="text-muted-foreground">
                    {intent.label}
                  </Badge>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A finished prompt will use only the sections that add value: {BUILDER_SECTIONS.join(", ")}.
            </p>
          </div>
        </section>

        <Card className="gap-0 p-5 md:p-6">
          <p className="text-sm font-semibold text-primary">In the meantime</p>
          <h2 className="mt-2 font-heading text-xl font-bold">Start from a ready-made prompt.</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The Prompt Library has patterns with variables and a check for each one. Use cases and playbooks include
            starting prompts too.
          </p>
          <Button asChild size="lg" className="mt-5 w-full">
            <Link href="/prompts">
              <Layers3 data-icon="inline-start" />
              Browse the Prompt Library
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="mt-2 w-full bg-card">
            <Link href="/discover">
              <Search data-icon="inline-start" />
              Explore use cases
            </Link>
          </Button>
        </Card>
      </div>
    </PageContainer>
  );
}
