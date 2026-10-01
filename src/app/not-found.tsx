import { Compass } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageContainer } from "@/components/shared/page-container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageContainer className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <Compass className="size-8 text-highlight" aria-hidden />
      <p className="mt-4 font-mono text-sm text-muted-foreground">404</p>
      <h1 className="mt-2 font-heading text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
        This page doesn’t exist.
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The link may be outdated. Start again from the home page or explore the use cases.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="px-4">
          <Link href="/">Go home</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="bg-card px-4">
          <Link href="/discover">Explore use cases</Link>
        </Button>
      </div>
    </PageContainer>
  );
}
