"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { EmptyState } from "@/components/shared/empty-state";
import { LabeledSelect } from "@/components/shared/labeled-select";
import { SearchInput } from "@/components/shared/search-input";
import type { PromptTemplate } from "@/types/content";

import { PromptCard } from "./prompt-card";

const ALL = "All";

export function PromptLibrary({ prompts }: { prompts: PromptTemplate[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(prompts.map((prompt) => prompt.category)))],
    [prompts],
  );

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return prompts.filter(
      (prompt) =>
        (category === ALL || prompt.category === category) &&
        `${prompt.title} ${prompt.outcome} ${prompt.when} ${prompt.prompt}`.toLowerCase().includes(needle),
    );
  }, [prompts, query, category]);

  return (
    <>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end">
        <SearchInput
          label="Search prompts"
          className="flex-1"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search prompts"
        />
        <LabeledSelect
          label="Category"
          hideLabel
          value={category}
          options={categories}
          onValueChange={setCategory}
          size="lg"
          className="sm:w-48"
        />
      </div>

      {visible.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {visible.map((prompt) => (
            <PromptCard key={prompt.slug} prompt={prompt} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Search}
          title="No prompts match."
          description="Try another search term or category."
        />
      )}
    </>
  );
}
