import type { UseCase } from "@/types/content";

import { UseCaseCard } from "./use-case-card";

export function UseCaseGrid({ useCases }: { useCases: UseCase[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:gap-5 xl:grid-cols-3">
      {useCases.map((useCase) => (
        <UseCaseCard key={useCase.slug} useCase={useCase} />
      ))}
    </div>
  );
}
