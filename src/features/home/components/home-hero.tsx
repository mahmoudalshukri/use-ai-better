import { ArrowUpRight, Hammer } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { homeCopy } from "@/content/site-copy";

import { GoalStarter } from "./goal-starter";

export function HomeHero() {
  return (
    <section className="grid gap-8 pb-12 md:pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pt-8">
      <div className="min-w-0">
        <p className="mb-5 text-sm font-semibold text-primary md:mb-6">{homeCopy.eyebrow}</p>
        <h1 className="max-w-3xl font-heading text-[clamp(2.75rem,11vw,4.75rem)] leading-[0.95] font-extrabold tracking-[-0.07em] lg:text-[clamp(4rem,6.4vw,7rem)] lg:leading-[0.92]">
          {homeCopy.titleBefore}
          <br />
          <span className="text-primary">{homeCopy.titleAccent}</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mt-8">
          {homeCopy.body}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9">
          <Button asChild size="lg" className="h-11 px-4">
            <Link href="/discover">
              {homeCopy.primaryCta}
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 bg-card px-4">
            <Link href="/builder">
              {homeCopy.secondaryCta}
              <Hammer data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </div>
      <GoalStarter />
    </section>
  );
}
