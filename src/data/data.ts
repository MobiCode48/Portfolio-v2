import { Briefcase, ShoppingCart, Mail, Home } from "lucide-react";
import type { linkType } from "@/types/types";

export const links: linkType[] = [
  {
    name: "Home",
    href: "/",
    reactIcon: Home,
  },

  {
    name: "My Projects",
    href: "/projects",
    reactIcon: Briefcase,
  },
  {
    name: "My Services",
    href: "/services",
    reactIcon: ShoppingCart,
  },
  {
    name: "Contact me",
    href: "/contact",
    reactIcon: Mail,
  },
];
