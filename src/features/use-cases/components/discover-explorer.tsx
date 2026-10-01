"use client";

import { Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { EmptyState } from "@/components/shared/empty-state";
import { LabeledSelect } from "@/components/shared/labeled-select";
import { SearchInput } from "@/components/shared/search-input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { UseCase } from "@/types/content";

import {
  defaultFilters,
  filterUseCases,
  getFilterOptions,
  type UseCaseFilters,
} from "../lib/filter-use-cases";
import { UseCaseGrid } from "./use-case-grid";

const selectFilters: { key: Exclude<keyof UseCaseFilters, "query">; label: string }[] = [
  { key: "category", label: "Category" },
  { key: "task", label: "Task type" },
  { key: "capability", label: "AI capability" },
  { key: "verification", label: "Verification level" },
];

export function DiscoverExplorer({
  useCases,
  initialFilters,
}: {
  useCases: UseCase[];
  initialFilters?: Partial<UseCaseFilters>;
}) {
  const [filters, setFilters] = useState<UseCaseFilters>({ ...defaultFilters, ...initialFilters });
  const options = useMemo(() => getFilterOptions(useCases), [useCases]);
  const visible = useMemo(() => filterUseCases(useCases, filters), [useCases, filters]);

  const update = (key: keyof UseCaseFilters, value: string) =>
    setFilters((current) => ({ ...current, [key]: value }));
  const reset = () => setFilters(defaultFilters);

  return (
    <>
      <Card className="mb-8 gap-4 p-4">
        <SearchInput
          label="Search use cases"
          value={filters.query}
          onChange={(event) => update("query", event.target.value)}
          placeholder="Search titles, descriptions, tags, or outcomes"
        />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {selectFilters.map(({ key, label }) => (
            <LabeledSelect
              key={key}
              label={label}
              value={filters[key]}
              options={options[key]}
              onValueChange={(value) => update(key, value)}
            />
          ))}
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1" aria-live="polite">
            <Filter className="size-[13px]" aria-hidden />
            {visible.length} {visible.length === 1 ? "use case" : "use cases"}
          </span>
          <Button variant="outline" size="sm" onClick={reset}>
            Reset filters
          </Button>
        </div>
      </Card>

      {visible.length > 0 ? (
        <UseCaseGrid useCases={visible} />
      ) : (
        <EmptyState
          icon={Search}
          title="No use cases match yet."
          description="Try a broader search or reset the filters."
          action={
            <Button variant="outline" onClick={reset}>
              Reset filters
            </Button>
          }
        />
      )}
    </>
  );
}
