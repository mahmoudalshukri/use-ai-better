export type SearchParams = Record<string, string | string[] | undefined>;

export function getParam(params: SearchParams, key: string): string | undefined {
  const value = params[key];
  return Array.isArray(value) ? value[0] : value;
}
