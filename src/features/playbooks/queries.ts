import { playbooks } from "@/content/playbooks";
import type { Playbook } from "@/types/content";

export function getPlaybooks(): Playbook[] {
  return playbooks;
}

export function getPlaybookBySlug(slug: string): Playbook | undefined {
  return playbooks.find((playbook) => playbook.slug === slug);
}
