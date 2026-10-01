import type { Metadata } from "next";

import { PageContainer } from "@/components/shared/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { ToolCard } from "@/features/tools/components/tool-card";
import { getTools } from "@/features/tools/registry";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Tools",
  description:
    "Small interactive tools for goals, priorities, energy, weekly reflection, prompt checks, coding briefs, and automation mapping.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <PageContainer>
      <PageHeader
        kicker="Tools"
        title="Work through the next decision."
        description="Small interactive tools for planning, reflection, note-taking, prioritization, and checking AI output. Nothing is stored as a personal library."
      />
      <div className="grid gap-4 sm:grid-cols-2 md:gap-5 xl:grid-cols-3">
        {getTools().map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </PageContainer>
  );
}
