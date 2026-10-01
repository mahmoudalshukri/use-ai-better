import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { BackLink } from "@/components/shared/back-link";
import { CategoryBadge } from "@/components/shared/category-badge";
import { CodeBlock } from "@/components/shared/code-block";
import { CopyButton } from "@/components/shared/copy-button";
import { DetailHero } from "@/components/shared/detail-hero";
import { PageContainer } from "@/components/shared/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getPromptBySlug, getPrompts } from "@/features/prompts/queries";
import { lowerFirst, pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPrompts().map((prompt) => ({ slug: prompt.slug }));
}

export async function generateMetadata({ params }: PageProps<"/prompts/[slug]">): Promise<Metadata> {
  const prompt = getPromptBySlug((await params).slug);
  if (!prompt) return {};
  return pageMetadata({
    title: prompt.title,
    description: `A prompt pattern for when ${lowerFirst(prompt.when)}. Outcome: ${lowerFirst(prompt.outcome)}.`,
    path: `/prompts/${prompt.slug}`,
    type: "article",
  });
}

function AsideSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-lg font-bold md:text-xl">{title}</h2>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export default async function PromptPage({ params }: PageProps<"/prompts/[slug]">) {
  const prompt = getPromptBySlug((await params).slug);
  if (!prompt) notFound();

  return (
    <PageContainer>
      <BackLink href="/prompts" label="Back to Prompt Library" />
      <DetailHero
        title={prompt.title}
        description={prompt.outcome}
        meta={<CategoryBadge>{prompt.category}</CategoryBadge>}
      />

      <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
        <Card className="h-fit gap-0 p-5 md:p-8">
          <p className="text-sm font-semibold text-primary">Prompt</p>
          <CodeBlock className="mt-4 text-sm">{prompt.prompt}</CodeBlock>
          <CopyButton
            text={prompt.prompt}
            label="Copy prompt"
            variant="default"
            size="lg"
            className="mt-5 self-start"
          />
        </Card>
        <aside className="space-y-4">
          <Card className="gap-6 p-5 md:p-6">
            <AsideSection title="Useful when">{prompt.when}.</AsideSection>
            <AsideSection title="Variables">
              <div className="flex flex-wrap gap-2">
                {prompt.variables.map((variable) => (
                  <Badge key={variable} variant="secondary" className="text-muted-foreground">
                    {variable}
                  </Badge>
                ))}
              </div>
            </AsideSection>
            <AsideSection title="Why it works">{prompt.why}</AsideSection>
            <AsideSection title="What to verify">{prompt.verify}</AsideSection>
          </Card>
          <Button asChild size="lg" className="w-full">
            <Link href="/prompts">
              Browse more prompts
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </Button>
        </aside>
      </div>
    </PageContainer>
  );
}
