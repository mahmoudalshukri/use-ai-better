import type { ReactNode } from "react";

export function DetailHero({
  meta,
  title,
  description,
}: {
  meta: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-4xl">
      <div className="flex flex-wrap items-center gap-2">{meta}</div>
      <h1 className="mt-5 font-heading text-4xl leading-[1.02] font-extrabold tracking-[-0.055em] break-words text-balance sm:text-5xl md:mt-6 md:text-6xl lg:text-7xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:mt-6 md:text-xl">
        {description}
      </p>
    </div>
  );
}
