import { Menu } from "lucide-react";
import { links } from "@/data/data";
export default function SidebarMobile() {
  return (
    <div className="relative dropdown bg-[#1c1c1c] min-h-screen">
      <div
        tabIndex={0}
        role="button"
        className="btn  btn-ghost  hover:bg-[#1c1c1c] hover:opacity-20"
      >
        <Menu />
      </div>
      <div className="justify-center items-center m-auto">
        <ul className="menu dropdown-content bg-[#1c1c1c] rounded-box z-1 mt-3  p-2 shadow">
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
