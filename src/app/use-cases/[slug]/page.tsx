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
import { RelatedResources } from "@/features/use-cases/components/related-resources";
import { UseCaseGrid } from "@/features/use-cases/components/use-case-grid";
import { getRelatedUseCases, getUseCaseBySlug, getUseCases } from "@/features/use-cases/queries";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getUseCases().map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({ params }: PageProps<"/use-cases/[slug]">): Promise<Metadata> {
  const useCase = getUseCaseBySlug((await params).slug);
  if (!useCase) return {};
  return pageMetadata({
    title: useCase.title,
    description: useCase.description,
    path: `/use-cases/${useCase.slug}`,
    type: "article",
  });
}

export default async function UseCasePage({ params }: PageProps<"/use-cases/[slug]">) {
  const useCase = getUseCaseBySlug((await params).slug);
  if (!useCase) notFound();
  const related = getRelatedUseCases(useCase);

  return (
    <PageContainer>
      <BackLink href="/discover" label="Back to Discover" />
      <DetailHero
        title={useCase.title}
        description={useCase.description}
        meta={
          <>
            <CategoryBadge>{useCase.category}</CategoryBadge>
            <span className="text-sm text-muted-foreground">
              {useCase.task} · {useCase.verification}
            </span>
          </>
        }
      />

      <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
        <div className="min-w-0 space-y-10">
          <InfoSection title="Best for">{useCase.bestFor}</InfoSection>
          <InfoSection title="Outcome">{useCase.outcome}</InfoSection>
          <section>
            <h2 className="font-heading text-xl font-bold md:text-2xl">What you need</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {useCase.whatYouNeed.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold md:text-2xl">Workflow</h2>
            <NumberedSteps steps={useCase.workflow} />
          </section>
          <InfoSection title="What you should verify">{useCase.verify}</InfoSection>
        </div>
        <PromptAside title="Starting prompt" prompt={useCase.starterPrompt} copyLabel="Copy starting prompt" />
      </div>

      <RelatedResources useCase={useCase} />

      {related.length > 0 && (
        <section className="mt-14 border-t pt-10 md:mt-16">
          <h2 className="mb-5 font-heading text-xl font-bold md:text-2xl">Related use cases</h2>
          <UseCaseGrid useCases={related} />
        </section>
      )}
    </PageContainer>
  );
}
