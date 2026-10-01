import { homeCopy } from "@/content/site-copy";

export function HowItWorks() {
  return (
    <section className="mt-14 border-t pt-10 md:mt-16 md:pt-11">
      <p className="text-sm font-semibold text-primary">{homeCopy.howKicker}</p>
      <h2 className="mt-2 max-w-3xl font-heading text-2xl font-bold tracking-[-0.04em] text-balance sm:text-3xl">
        {homeCopy.howTitle}
      </h2>
      <ol className="mt-8 grid gap-6 sm:grid-cols-2 md:gap-0 lg:grid-cols-4">
        {homeCopy.steps.map((step, index) => (
          <li key={step.title} className="border-l-2 border-border px-5 py-1 lg:first:border-l-0 lg:first:pl-0">
            <span className="font-mono text-xs text-highlight">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 font-heading text-lg font-bold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
