import { ToolLinkCard } from "@/features/tools/components/tool-link-card";
import type { ToolDefinition } from "@/features/tools/types";

export function FeaturedTools({ tools }: { tools: ToolDefinition[] }) {
  return (
    <section className="mt-14 grid gap-6 border-t pt-10 md:mt-16 md:pt-11 lg:grid-cols-[1fr_1.5fr]">
      <div>
        <p className="text-sm font-semibold text-primary">Useful tools</p>
        <h2 className="mt-2 font-heading text-2xl font-bold tracking-[-0.04em] text-balance sm:text-3xl">
          Work through the problem, not around it.
        </h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {tools.map((tool) => (
          <ToolLinkCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}
