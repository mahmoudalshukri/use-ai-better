import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <Card className="items-center px-6 py-12 text-center">
      <Icon className="size-6 text-highlight" aria-hidden />
      <h2 className="font-heading text-xl font-bold sm:text-2xl">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
      {action}
    </Card>
  );
}
