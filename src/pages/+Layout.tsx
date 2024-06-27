import { useMediaQuery } from "@uidotdev/usehooks";
import Sidebar from "../components/common/sidebar";
import "../styles/tailwind.css";
import type React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 w-full min-h-screen p-6 bg-[#161616]">
        {children}
      </div>
    </div>
  );
}
