import { Check } from "lucide-react";
import type { Metadata } from "next";

import { PageContainer } from "@/components/shared/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { lessons } from "@/content/lessons";
import { promptPrinciples } from "@/content/prompt-principles";
import { learnCopy } from "@/content/site-copy";
import { LessonCard } from "@/features/learn/components/lesson-card";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Learn",
  description: learnCopy.description,
  path: "/learn",
});

export default function LearnPage() {
  return (
    <PageContainer>
      <PageHeader kicker={learnCopy.kicker} title={learnCopy.title} description={learnCopy.description} />
      <div className="grid gap-4 md:grid-cols-2">
        {lessons.map((lesson, index) => (
          <LessonCard key={lesson.slug} lesson={lesson} index={index} />
        ))}
      </div>

      <section className="mt-12 border-t pt-10 md:mt-14">
        <h2 className="font-heading text-xl font-bold md:text-2xl">{learnCopy.checklistTitle}</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {promptPrinciples.map((item) => (
            <li key={item.title}>
              <Card className="flex-row items-start gap-3 p-4 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <span>
                  <span className="font-semibold">{item.title}</span>
                  <span className="mt-1 block text-muted-foreground">{item.detail}</span>
                </span>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </PageContainer>
  );
}
