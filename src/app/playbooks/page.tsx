import { Layers3 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageContainer } from "@/components/shared/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { PlaybookCard } from "@/features/playbooks/components/playbook-card";
import { getPlaybooks } from "@/features/playbooks/queries";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Playbooks",
  description:
    "Step-by-step AI workflows for learning, research, meetings, critique, coding, planning, automation, and direction.",
  path: "/playbooks",
});

export default function PlaybooksPage() {
  return (
    <PageContainer>
      <PageHeader
        kicker="Playbooks"
        title="Follow a workflow that holds up."
        description="Substantial, practical sequences for learning, research, work, coding, planning, and verification."
        action={
          <Button asChild size="lg" className="h-10 px-4">
            <Link href="/prompts">
              <Layers3 data-icon="inline-start" />
              Browse prompts
            </Link>
          </Button>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 md:gap-5 xl:grid-cols-3">
        {getPlaybooks().map((playbook, index) => (
          <PlaybookCard key={playbook.slug} playbook={playbook} index={index} featured={index === 0} />
        ))}
      </div>
    </PageContainer>
  );
}
