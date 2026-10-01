import { assertContentIntegrity } from "@/content/integrity";
import { useCases } from "@/content/use-cases";
import type { UseCase } from "@/types/content";

let checked = false;

function checkOnce() {
  if (!checked) {
    assertContentIntegrity();
    checked = true;
  }
}

export function getUseCases(): UseCase[] {
  checkOnce();
  return useCases;
}

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((item) => item.slug === slug);
}

export function getRelatedUseCases(useCase: UseCase, limit = 3): UseCase[] {
  return useCases
    .filter((item) => item.category === useCase.category && item.slug !== useCase.slug)
    .slice(0, limit);
}
