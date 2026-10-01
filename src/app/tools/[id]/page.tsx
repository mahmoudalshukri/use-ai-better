import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BackLink } from "@/components/shared/back-link";
import { PageContainer } from "@/components/shared/page-container";
import { ToolWorkspace } from "@/features/tools/components/tool-workspace";
import { getToolById, getTools } from "@/features/tools/registry";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getTools().map((tool) => ({ id: tool.id }));
}

export async function generateMetadata({ params }: PageProps<"/tools/[id]">): Promise<Metadata> {
  const tool = getToolById((await params).id);
  if (!tool) return {};
  return pageMetadata({
    title: tool.title,
    description: tool.summary,
    path: `/tools/${tool.id}`,
  });
}

export default async function ToolPage({ params }: PageProps<"/tools/[id]">) {
  const tool = getToolById((await params).id);
  if (!tool) notFound();
  const Icon = tool.icon;

  return (
    <PageContainer>
      <BackLink href="/tools" label="Back to Tools" />
      <div className="mb-7 flex items-start gap-3 sm:gap-4 md:mb-9">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
          <Icon className="size-[22px]" aria-hidden />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-primary">Interactive tool</p>
          <h1 className="font-heading text-3xl leading-tight font-extrabold tracking-[-0.045em] break-words sm:text-4xl">
            {tool.title}
          </h1>
          <p className="mt-2 text-muted-foreground">{tool.summary}</p>
        </div>
      </div>
      <ToolWorkspace toolId={tool.id} />
    </PageContainer>
  );
}
