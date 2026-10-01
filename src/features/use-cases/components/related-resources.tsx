import Link from "next/link";

import { Card } from "@/components/ui/card";
import { lessons } from "@/content/lessons";
import { getPlaybookBySlug } from "@/features/playbooks/queries";
import { getPromptBySlug } from "@/features/prompts/queries";
import { getToolById } from "@/features/tools/registry";
import type { UseCase } from "@/types/content";

type RelatedLink = { href: string; kind: string; title: string };

export function RelatedResources({ useCase }: { useCase: UseCase }) {
  const links: RelatedLink[] = [
    ...useCase.relatedPlaybooks.map((slug) => {
      const playbook = getPlaybookBySlug(slug);
      return playbook ? { href: `/playbooks/${playbook.slug}`, kind: "Playbook", title: playbook.title } : null;
    }),
    ...useCase.relatedTools.map((id) => {
      const tool = getToolById(id);
      return tool ? { href: `/tools/${tool.id}`, kind: "Tool", title: tool.title } : null;
    }),
    ...useCase.relatedPrompts.map((slug) => {
      const prompt = getPromptBySlug(slug);
      return prompt ? { href: `/prompts/${prompt.slug}`, kind: "Prompt", title: prompt.title } : null;
    }),
    ...useCase.relatedLessons.map((slug) => {
      const lesson = lessons.find((item) => item.slug === slug);
      return lesson ? { href: `/learn#${lesson.slug}`, kind: "Lesson", title: lesson.title } : null;
    }),
  ].filter((item): item is RelatedLink => item !== null);

  if (links.length === 0) return null;

  return (
    <section className="mt-14 border-t pt-10 md:mt-16">
      <h2 className="mb-5 font-heading text-xl font-bold md:text-2xl">Related</h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Card className="card-interactive relative gap-1 p-4">
              <p className="text-xs font-semibold text-primary">{link.kind}</p>
              <Link
                href={link.href}
                className="font-heading text-base font-bold outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-3 focus-visible:after:ring-ring/50"
              >
                {link.title}
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
