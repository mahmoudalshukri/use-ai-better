import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { USE_CASE_CATEGORIES } from "@/content/categories";
import { homeCopy } from "@/content/site-copy";

export function CategoryGrid() {
  return (
    <section className="border-t pt-10 md:pt-11">
      <SectionHeading
        kicker={homeCopy.exploreKicker}
        title={homeCopy.exploreTitle}
        action={
          <Button asChild variant="outline" size="lg" className="bg-card">
            <Link href="/discover">
              All use cases
              <ChevronRight data-icon="inline-end" />
            </Link>
          </Button>
        }
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {USE_CASE_CATEGORIES.map((category, index) => (
          <Link
            key={category.name}
            href={`/discover?category=${encodeURIComponent(category.name)}`}
            className="flex min-h-24 flex-col justify-between gap-2 rounded-xl bg-card p-4 text-sm ring-1 ring-foreground/10 transition outline-none hover:bg-secondary/60 hover:ring-primary/35 focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <span className="flex items-start justify-between gap-2 font-semibold">
              <span className="min-w-0">{category.name}</span>
              <span className="text-xs font-normal text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
            </span>
            <span className="text-xs leading-snug font-normal text-muted-foreground">{category.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
