import type { ToolId } from "@/content/tool-ids";
import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

/** Draft values for a tool, persisted as a flat string map in localStorage. */
export type ToolValues = Record<string, string>;

export type ToolField = {
  key: string;
  label: string;
  multiline?: boolean;
  type?: "text" | "date";
  placeholder?: string;
};

export type ToolInputProps = {
  values: ToolValues;
  setValue: (key: string, value: string) => void;
};

export type ToolDefinition = {
  id: ToolId;
  title: string;
  summary: string;
  icon: LucideIcon;
  /** Declarative text inputs. Ignored when `Input` is provided. */
  fields?: ToolField[];
  /** Custom interactive input for tools that need more than text fields. */
  Input?: ComponentType<ToolInputProps>;
  /** Helper text shown below the inputs. */
  note?: string;
  buildOutput: (values: ToolValues) => string;
};
