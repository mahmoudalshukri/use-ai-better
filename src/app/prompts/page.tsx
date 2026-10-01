import type { Metadata } from "next";

import { PageContainer } from "@/components/shared/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { PromptLibrary } from "@/features/prompts/components/prompt-library";
import { getPrompts } from "@/features/prompts/queries";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Prompt Library",
  description: "Substantial prompt templates with variables, rationale, and verification checks.",
  path: "/prompts",
});

export default function PromptsPage() {
  return (
    <PageContainer>
      <PageHeader
        kicker="Prompt Library"
        title="Start with a prompt that has a job."
        description="Substantial templates with variables, rationale, and checks. Adapt one, copy it, and keep the judgment yours."
      />
      <PromptLibrary prompts={getPrompts()} />
    </PageContainer>
  );
}
