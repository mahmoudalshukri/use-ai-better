import { Brand } from "./brand";
import { NavLinks } from "./nav-links";
import { SidebarFooterNote } from "./sidebar-footer-note";

export function AppSidebar() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col border-r bg-sidebar text-sidebar-foreground lg:flex">
      <div className="flex h-16 items-center border-b px-5">
        <Brand />
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto px-3 py-5">
        <p className="mb-3 px-3 text-xs font-semibold text-muted-foreground">Navigate</p>
        <NavLinks />
        <div className="mt-auto pt-6">
          <SidebarFooterNote />
        </div>
      </div>
    </aside>
  );
}
