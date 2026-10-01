"use client";

import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export type FormFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  type?: "text" | "date";
  placeholder?: string;
};

export function FormField({ label, value, onChange, multiline, type = "text", placeholder }: FormFieldProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="font-semibold">
        {label}
      </Label>
      {multiline ? (
        <Textarea
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="min-h-24 resize-y bg-card"
        />
      ) : (
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="h-10 bg-card"
        />
      )}
    </div>
  );
}
