"use client";

import { TriangleAlert } from "lucide-react";
import { useEffect } from "react";

import { PageContainer } from "@/components/shared/page-container";
import { Button } from "@/components/ui/button";

export default function Error({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageContainer className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <TriangleAlert className="size-8 text-destructive" aria-hidden />
      <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.04em]">Something went wrong.</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        This view hit an unexpected error. Your drafts are saved in this browser.
      </p>
      <Button size="lg" className="mt-7 px-4" onClick={() => retry()}>
        Try again
      </Button>
    </PageContainer>
  );
}
