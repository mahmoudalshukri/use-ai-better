import {
  BookOpen,
  Hammer,
  Home,
  Layers3,
  Lightbulb,
  Search,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  /** Additional path prefixes that should mark this item as active. */
  matches?: string[];
  /** Release status shown next to the label, e.g. for features that are not available yet. */
  status?: "coming-soon";
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/discover", label: "Discover", icon: Search, matches: ["/use-cases"] },
  { href: "/playbooks", label: "Playbooks", icon: BookOpen },
  { href: "/tools", label: "Tools", icon: Wrench },
  { href: "/prompts", label: "Prompt Library", icon: Layers3 },
  { href: "/builder", label: "Prompt Builder", icon: Hammer, status: "coming-soon" },
  { href: "/learn", label: "Learn", icon: Lightbulb },
];

export function isNavItemActive(item: NavItem, pathname: string) {
  if (item.href === "/") return pathname === "/";
  return [item.href, ...(item.matches ?? [])].some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}
