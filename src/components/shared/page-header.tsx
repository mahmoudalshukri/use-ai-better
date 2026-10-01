import type { ReactNode } from "react";

export function PageHeader({
  kicker,
  title,
  description,
  action,
}: {
  kicker: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-5 border-b pb-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between md:mb-10 md:pb-8">
      <div className="min-w-0">
        <p className="mb-3 text-sm font-semibold text-primary">{kicker}</p>
        <h1 className="font-heading text-3xl font-extrabold tracking-[-0.045em] text-balance sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-4">
          {description}
        </p>
      </div>
      {action && <div className="flex w-full items-center sm:w-auto [&>*]:w-full sm:[&>*]:w-auto">{action}</div>}
    </div>
  );
}
