"use client";

import { Info, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

import { Brand } from "./brand";
import { NavLinks } from "./nav-links";
import { SidebarFooterNote } from "./sidebar-footer-note";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 gap-0 bg-sidebar p-0">
        <SheetHeader className="h-16 justify-center border-b px-5">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SheetDescription className="sr-only">{siteConfig.tagline}</SheetDescription>
          <Brand onClick={close} />
        </SheetHeader>
        <div className="flex flex-1 flex-col overflow-y-auto px-3 py-5">
          <NavLinks onNavigate={close} />
          <Link
            href="/about"
            onClick={close}
            className="mt-4 flex items-center gap-2.5 rounded-lg border-t px-3 pt-4 pb-2 text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <Info className="size-[17px]" strokeWidth={1.8} aria-hidden />
            About this tool
          </Link>
          <div className="mt-auto pt-6">
            <SidebarFooterNote />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
