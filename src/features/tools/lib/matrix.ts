export const QUADRANTS = ["Do now", "Schedule", "Delegate", "Remove / later"] as const;

export type Quadrant = (typeof QUADRANTS)[number];

export type MatrixTask = { text: string; quadrant: Quadrant };

export function parseMatrixTasks(value: string | undefined): MatrixTask[] {
  if (!value) return [];
  try {
    const parsed: unknown = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (task): task is MatrixTask =>
        typeof task?.text === "string" && QUADRANTS.includes(task?.quadrant),
    );
  } catch {
    return [];
  }
}

export function serializeMatrixTasks(tasks: MatrixTask[]): string {
  return JSON.stringify(tasks);
}
