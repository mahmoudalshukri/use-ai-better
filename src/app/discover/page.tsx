import { Layers3 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageContainer } from "@/components/shared/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { DiscoverExplorer } from "@/features/use-cases/components/discover-explorer";
import { ALL } from "@/features/use-cases/lib/filter-use-cases";
import { getUseCases } from "@/features/use-cases/queries";
import { pageMetadata } from "@/lib/metadata";
import { getParam } from "@/lib/search-params";

export const metadata: Metadata = pageMetadata({
  title: "Discover",
  description:
    "Explore practical AI use cases for learning, work, research, coding, automation, thinking, planning, productivity, and everyday tasks.",
  path: "/discover",
});

export default async function DiscoverPage({ searchParams }: PageProps<"/discover">) {
  const params = await searchParams;
  const useCases = getUseCases();
  const goal = getParam(params, "goal") ?? "";
  const requestedCategory = getParam(params, "category");
  const category = useCases.some((item) => item.category === requestedCategory) ? requestedCategory! : ALL;

  return (
    <PageContainer>
      <PageHeader
        kicker="Discover"
        title="Find what AI can help you do."
        description="Explore practical use cases for learning, work, research, coding, automation, thinking, planning, productivity, and everyday tasks."
        action={
          <Button asChild size="lg" className="h-10 px-4">
            <Link href="/prompts">
              <Layers3 data-icon="inline-start" />
              Browse prompts
            </Link>
          </Button>
        }
      />
      <DiscoverExplorer
        key={`${goal}|${category}`}
        useCases={useCases}
        initialFilters={{ query: goal, category }}
      />
    </PageContainer>
  );
}
