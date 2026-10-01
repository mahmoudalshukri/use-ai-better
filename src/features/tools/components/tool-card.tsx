import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/card";

import type { ToolDefinition } from "../types";

export function ToolCard({ tool }: { tool: ToolDefinition }) {
  const Icon = tool.icon;
  return (
    <Card className="card-interactive relative min-h-48 justify-between gap-5 p-5 md:p-6">
      <div>
        <Icon className="size-[22px] text-primary" aria-hidden />
        <h2 className="mt-5 font-heading text-xl font-bold md:text-2xl">
          <Link
            href={`/tools/${tool.id}`}
            className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-3 focus-visible:after:ring-ring/50"
          >
            {tool.title}
          </Link>
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tool.summary}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Open tool <ArrowUpRight className="size-3.5" aria-hidden />
      </span>
    </Card>
  );
}
