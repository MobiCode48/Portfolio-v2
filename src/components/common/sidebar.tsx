import avatar from "../../assets/myAvatar.svg";
import { usePageContext } from "vike-react/usePageContext";
import { clsx } from "clsx";
import type { linkType } from "@/types/types";
import { useMediaQuery } from "@uidotdev/usehooks";
import SidebarMobile from "./sidebar-mobile";
import { links } from "@/data/data";

export default function Sidebar() {
  const pageContext = usePageContext();

  const { urlPathname } = pageContext;

  const isActiveUrl = (href: string): boolean => {
    return href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  };

  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");

  return (
    <div>
      {!isSmallDevice ? (
        <div className="hidden lg:block flex-col border-r-2 border-r-gray-900/10 p-4 w-auto min-h-screen h-full bg-[#1c1c1c]">
          <div className="mt-12">
            <div className="flex flex-col gap-y-8">
              <div className="flex space-x-4">
                <img
                  src={avatar}
                  height={50}
                  width={50}
                  alt="avatar"
                  className="object-cover border-2 border-white rounded-full"
                />
                <div className="flex flex-col gap-y-2">
                  <p className="text-sm text-center text-white">
                    Emmanuel Ezeagwula
                  </p>
                  <p className="text-sm text-gray-500">Software Developer</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                {links.map((link: linkType) => (
                  <div key={link.name}>
                    <div className="flex flex-col">
                      <div
                        className={clsx(
                          "flex text-zinc-400 hover:text-white cursor-pointer p-2 rounded-md space-x-2",
                          {
                            "bg-[#2b2b2b] border border-[#2b2b2b] shadow-md":
                              isActiveUrl(link.href),
                          }
                        )}
                      >
                        {<link.reactIcon size={20} />}
                        <a href={link.href}>
                          <span>{link.name}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SidebarMobile />
      )}
    </div>
  );
}
