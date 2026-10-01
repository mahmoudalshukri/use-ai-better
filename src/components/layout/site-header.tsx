import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

import { Brand } from "./brand";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-2 border-b bg-background/90 px-3 backdrop-blur supports-[backdrop-filter]:bg-background/75 sm:px-6 lg:px-12">
      <MobileNav />
      <Brand className="lg:hidden" />
      <p className="hidden min-w-0 truncate text-sm text-muted-foreground lg:block">
        {siteConfig.tagline}
      </p>
      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <ThemeToggle />
        <Button asChild variant="outline" size="sm" className="hidden rounded-full px-3 sm:inline-flex">
          <Link href="/about">
            About this tool
            <ArrowUpRight data-icon="inline-end" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
