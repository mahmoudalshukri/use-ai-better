"use client";

import { Check, Copy } from "lucide-react";
import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

type CopyButtonProps = Omit<ComponentProps<typeof Button>, "onClick" | "children"> & {
  text: string;
  label?: string;
  copiedLabel?: string;
  /** Renders an icon-only button; `label` becomes the accessible name. */
  iconOnly?: boolean;
};

export function CopyButton({
  text,
  label = "Copy",
  copiedLabel = "Copied",
  iconOnly = false,
  variant = "outline",
  ...props
}: CopyButtonProps) {
  const { copied, copy } = useCopyToClipboard();
  const Icon = copied ? Check : Copy;

  if (iconOnly) {
    return (
      <Button variant={variant} size="icon" aria-label={label} onClick={() => copy(text)} {...props}>
        <Icon />
      </Button>
    );
  }

  return (
    <Button variant={variant} onClick={() => copy(text)} {...props}>
      <Icon data-icon="inline-start" />
      {copied ? copiedLabel : label}
    </Button>
  );
}
