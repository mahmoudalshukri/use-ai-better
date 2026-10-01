import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="mb-8 inline-flex items-center gap-2 rounded-md text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 md:mb-9"
    >
      <ArrowLeft className="size-[15px]" aria-hidden />
      {label}
    </Link>
  );
}
