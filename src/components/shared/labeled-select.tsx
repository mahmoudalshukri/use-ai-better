"use client";

import { useId } from "react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function LabeledSelect({
  label,
  value,
  options,
  onValueChange,
  className,
  labelClassName,
  hideLabel = false,
  size = "default",
}: {
  label: string;
  value: string;
  options: readonly string[];
  onValueChange: (value: string) => void;
  className?: string;
  labelClassName?: string;
  hideLabel?: boolean;
  /** `lg` matches the 40px height of form inputs. */
  size?: "default" | "lg";
}) {
  const id = useId();

  return (
    <div className={cn("flex min-w-0 flex-col gap-1.5", className)}>
      <Label
        htmlFor={id}
        className={cn("text-xs font-semibold text-muted-foreground", hideLabel && "sr-only", labelClassName)}
      >
        {label}
      </Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger id={id} className={cn("w-full bg-card", size === "lg" && "data-[size=default]:h-10")}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
