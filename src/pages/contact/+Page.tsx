import HeaderTitle from "@/components/common/headerTitle";
import { Mail } from "lucide-react";

export default function Page() {
  return (
    <div>
      <HeaderTitle title="Contact Me" />
      <div className="mt-10">
        <div className="flex gap-4">
          <button className="btn btn-xs sm:btn-md bg-[#1c1c1c] border border-zinc-500 cursor-default hover:bg-zinc-700">
            Call me <span>(+32)</span> 048 37 32 04
          </button>
          <button className="btn btn-xs sm:btn-md bg-[#1c1c1c] border border-zinc-500 hover:bg-zinc-700 animate-pulse">
            <Mail />
            <a href="mailto:emmanuelobi.pro@gmail.com">Email me</a>
          </button>
        </div>
      </div>
    </div>
  );
}
