import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function CodeBlock({ className, ...props }: ComponentProps<"pre">) {
  return (
    <pre
      className={cn(
        "max-w-full rounded-lg bg-muted p-4 font-mono text-xs leading-relaxed break-words whitespace-pre-wrap text-muted-foreground md:p-5",
        className,
      )}
      {...props}
    />
  );
}
