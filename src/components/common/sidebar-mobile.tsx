import { Menu } from "lucide-react";
import { links } from "@/data/data";
import type { linkType } from "@/types/types";
export default function SidebarMobile() {
  return (
    <div className="dropdown bg-[#1c1c1c] min-h-screen  w-full">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <Menu />
      </div>
      <div className="relative">
        <ul className="menu dropdown-content bg-[#1c1c1c]  absolute top-0 left-0 rounded-box z-[1] mt-3  p-2 shadow">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
