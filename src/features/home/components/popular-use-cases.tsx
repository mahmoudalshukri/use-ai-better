import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { UseCaseCard } from "@/features/use-cases/components/use-case-card";
import type { UseCase } from "@/types/content";

export function PopularUseCases({ useCases }: { useCases: UseCase[] }) {
  return (
    <section className="mt-14 border-t pt-10 md:mt-16 md:pt-11">
      <SectionHeading
        kicker="Popular use cases"
        title="Start with a concrete problem."
        action={
          <Button asChild variant="outline" size="lg" className="bg-card">
            <Link href="/playbooks">
              View playbooks
              <ChevronRight data-icon="inline-end" />
            </Link>
          </Button>
        }
      />
      <div className="grid gap-4 md:grid-cols-3">
        {useCases.map((useCase) => (
          <UseCaseCard key={useCase.slug} useCase={useCase} />
        ))}
      </div>
    </section>
  );
}
