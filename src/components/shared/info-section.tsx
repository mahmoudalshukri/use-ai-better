import type { ReactNode } from "react";

export function InfoSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-heading text-xl font-bold md:text-2xl">{title}</h2>
      <div className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-4">
        {children}
      </div>
    </section>
  );
}
