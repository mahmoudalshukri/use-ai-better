import type { UseCase } from "@/types/content";

export const ALL = "All";

export type UseCaseFilters = {
  query: string;
  category: string;
  task: string;
  capability: string;
  verification: string;
};

export const defaultFilters: UseCaseFilters = {
  query: "",
  category: ALL,
  task: ALL,
  capability: ALL,
  verification: ALL,
};

const STOP_WORDS = new Set([
  "the", "and", "for", "with", "want", "how", "what", "that", "this", "make", "into",
  "from", "your", "you", "my", "about", "need", "new", "can", "get", "use",
]);

function uniqueValues(items: UseCase[], pick: (item: UseCase) => string) {
  return [ALL, ...Array.from(new Set(items.map(pick)))];
}

export function getFilterOptions(items: UseCase[]) {
  return {
    category: uniqueValues(items, (item) => item.category),
    task: uniqueValues(items, (item) => item.task),
    capability: uniqueValues(items, (item) => item.capability),
    verification: uniqueValues(items, (item) => item.verification),
  };
}

/**
 * Scores how well a use case matches free text. An exact phrase match wins;
 * otherwise each meaningful word that appears counts, so a sentence-length
 * goal from the home page still surfaces relevant results.
 */
function searchScore(item: UseCase, query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return 1;
  const haystack = `${item.title} ${item.description} ${item.bestFor} ${item.outcome} ${item.tags.join(" ")} ${item.starterPrompt}`.toLowerCase();
  if (haystack.includes(needle)) return 100;
  const tokens = needle
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length >= 3 && !STOP_WORDS.has(token));
  return tokens.filter((token) => haystack.includes(token)).length;
}

const matchesOption = (value: string, selected: string) => selected === ALL || value === selected;

export function filterUseCases(items: UseCase[], filters: UseCaseFilters): UseCase[] {
  return items
    .map((item) => ({ item, score: searchScore(item, filters.query) }))
    .filter(
      ({ item, score }) =>
        score > 0 &&
        matchesOption(item.category, filters.category) &&
        matchesOption(item.task, filters.task) &&
        matchesOption(item.capability, filters.capability) &&
        matchesOption(item.verification, filters.verification),
    )
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item);
}
