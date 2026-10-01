import Link from "next/link";

import { Card } from "@/components/ui/card";

import type { ToolDefinition } from "../types";

/** Compact horizontal tool link used in teaser sections. */
export function ToolLinkCard({ tool }: { tool: ToolDefinition }) {
  const Icon = tool.icon;
  return (
    <Card className="card-interactive relative flex-row gap-3 p-4">
      <Icon className="mt-0.5 size-[19px] shrink-0 text-primary" aria-hidden />
      <div className="min-w-0">
        <Link
          href={`/tools/${tool.id}`}
          className="text-sm font-semibold outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-3 focus-visible:after:ring-ring/50"
        >
          {tool.title}
        </Link>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{tool.summary}</p>
      </div>
    </Card>
  );
}
