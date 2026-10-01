import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ComingSoonBadge({ className, label = "Coming soon" }: { className?: string; label?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "border-highlight/40 bg-highlight/15 font-semibold text-highlight-foreground dark:text-highlight",
        className,
      )}
    >
      {label}
    </Badge>
  );
}
