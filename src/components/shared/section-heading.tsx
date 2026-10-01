import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  action,
}: {
  kicker: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-primary">{kicker}</p>
        <h2 className="mt-2 font-heading text-2xl font-bold tracking-[-0.04em] text-balance sm:text-3xl">
          {title}
        </h2>
      </div>
      {action && <div className="hidden shrink-0 sm:block">{action}</div>}
    </div>
  );
}
