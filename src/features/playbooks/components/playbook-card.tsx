import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { CategoryBadge } from "@/components/shared/category-badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Playbook } from "@/types/content";

export function PlaybookCard({
  playbook,
  index,
  featured = false,
}: {
  playbook: Playbook;
  index: number;
  featured?: boolean;
}) {
  return (
    <Card
      className={cn(
        "card-interactive relative min-h-56 justify-between gap-5 p-5 md:p-6",
        featured && "sm:col-span-2",
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <CategoryBadge>{playbook.category}</CategoryBadge>
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h2 className="mt-5 font-heading text-xl leading-tight font-bold md:mt-6 md:text-2xl">
          <Link
            href={`/playbooks/${playbook.slug}`}
            className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-3 focus-visible:after:ring-ring/50"
          >
            {playbook.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{playbook.intro}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Open playbook <ArrowUpRight className="size-3.5" aria-hidden />
      </span>
    </Card>
  );
}
