"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ComingSoonBadge } from "@/components/shared/coming-soon-badge";
import { isNavItemActive, mainNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="flex flex-col gap-1">
      {mainNav.map((item) => {
        const active = isNavItemActive(item, pathname);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors outline-none",
              "hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
              active && "bg-sidebar-accent font-semibold text-sidebar-accent-foreground hover:bg-sidebar-accent",
            )}
          >
            <Icon className="size-[17px] shrink-0" strokeWidth={1.8} aria-hidden />
            <span className="flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-1">
              <span>{item.label}</span>
              {item.status === "coming-soon" && <ComingSoonBadge className="h-[18px] px-1.5 text-[10px]" />}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
