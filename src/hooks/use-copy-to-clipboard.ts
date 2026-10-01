"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export function useCopyToClipboard(resetAfterMs = 1500) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeout.current), []);

  const copy = useCallback(
    async (text: string, successMessage = "Copied to clipboard") => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        toast.success(successMessage);
        window.clearTimeout(timeout.current);
        timeout.current = window.setTimeout(() => setCopied(false), resetAfterMs);
      } catch {
        toast.error("Copy failed. Select the text and copy it manually.");
      }
    },
    [resetAfterMs],
  );

  return { copied, copy };
}
