import { Check } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BackLink } from "@/components/shared/back-link";
import { CategoryBadge } from "@/components/shared/category-badge";
import { DetailHero } from "@/components/shared/detail-hero";
import { InfoSection } from "@/components/shared/info-section";
import { NumberedSteps } from "@/components/shared/numbered-steps";
import { PageContainer } from "@/components/shared/page-container";
import { PromptAside } from "@/components/shared/prompt-aside";
import { getPlaybookBySlug, getPlaybooks } from "@/features/playbooks/queries";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPlaybooks().map((playbook) => ({ slug: playbook.slug }));
}

export async function generateMetadata({ params }: PageProps<"/playbooks/[slug]">): Promise<Metadata> {
  const playbook = getPlaybookBySlug((await params).slug);
  if (!playbook) return {};
  return pageMetadata({
    title: playbook.title,
    description: `${playbook.intro} ${playbook.outcome}`,
    path: `/playbooks/${playbook.slug}`,
    type: "article",
  });
}

export default async function PlaybookPage({ params }: PageProps<"/playbooks/[slug]">) {
  const playbook = getPlaybookBySlug((await params).slug);
  if (!playbook) notFound();

  return (
    <PageContainer>
      <BackLink href="/playbooks" label="Back to Playbooks" />
      <DetailHero
        title={playbook.title}
        description={playbook.intro}
        meta={<CategoryBadge>{playbook.category}</CategoryBadge>}
      />

      <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
        <div className="min-w-0 space-y-9">
          <InfoSection title="Outcome">{playbook.outcome}</InfoSection>
          <InfoSection title="Best for">{playbook.bestFor}</InfoSection>
          <section>
            <h2 className="font-heading text-xl font-bold md:text-2xl">What you need</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {playbook.need.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold md:text-2xl">Step-by-step workflow</h2>
            <NumberedSteps steps={playbook.steps} />
          </section>
          <InfoSection title="What AI should produce">{playbook.produce}</InfoSection>
          <InfoSection title="Common failure mode">{playbook.failure}</InfoSection>
          <InfoSection title="What the human must verify">{playbook.verify}</InfoSection>
          <InfoSection title="Example">{playbook.example}</InfoSection>
        </div>
        <PromptAside title="Reusable prompt" prompt={playbook.prompt} />
      </div>
    </PageContainer>
  );
}
