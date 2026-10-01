import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

export function CategoryBadge({ children }: { children: ReactNode }) {
  return (
    <Badge variant="secondary" className="font-semibold text-muted-foreground">
      {children}
    </Badge>
  );
}
