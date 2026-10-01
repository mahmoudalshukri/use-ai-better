import Link from "next/link";

import { CategoryBadge } from "@/components/shared/category-badge";
import { Card } from "@/components/ui/card";
import type { UseCase } from "@/types/content";

export function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <Card className="card-interactive relative h-full min-h-60 justify-between gap-5 p-5">
      <div>
        <div className="mb-4 flex">
          <CategoryBadge>{useCase.category}</CategoryBadge>
        </div>
        <h3 className="font-heading text-lg leading-tight font-bold sm:text-xl">
          <Link
            href={`/use-cases/${useCase.slug}`}
            className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-3 focus-visible:after:ring-ring/50"
          >
            {useCase.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{useCase.description}</p>
      </div>
      <ul className="flex flex-wrap gap-x-2 gap-y-1" aria-label="Tags">
        {useCase.tags.map((tag) => (
          <li key={tag} className="text-xs text-muted-foreground">
            #{tag}
          </li>
        ))}
      </ul>
    </Card>
  );
}
