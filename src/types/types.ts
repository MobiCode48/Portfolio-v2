import type { LucideProps } from "lucide-react";

export type linkType = {
  name: string;
  href: string;
  reactIcon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};
