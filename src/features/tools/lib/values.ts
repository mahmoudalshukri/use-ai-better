const LIST_SEPARATOR = "|";

export function parseList(value: string | undefined): string[] {
  return (value ?? "").split(LIST_SEPARATOR).filter(Boolean);
}

export function serializeList(list: string[]): string {
  return list.join(LIST_SEPARATOR);
}

export function orPlaceholder(value: string | undefined, placeholder: string) {
  return value?.trim() ? value : `[${placeholder}]`;
}
