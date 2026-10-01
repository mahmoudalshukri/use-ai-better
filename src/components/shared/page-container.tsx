import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function PageContainer({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1260px] px-4 pt-8 pb-16 sm:px-6 md:pt-12 lg:px-12 lg:pb-24",
        className,
      )}
      {...props}
    />
  );
}
