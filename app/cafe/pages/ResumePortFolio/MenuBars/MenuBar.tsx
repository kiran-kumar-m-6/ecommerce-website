"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/atom";
import { RightMenuProps } from "@/Data/Type/PortFolio/PortFolioTypes";

interface Props {
  data: RightMenuProps[];
}

export default function MenuBar({ data }: Props) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    console.log("Dark Mode", dark);
  }, [dark]);

  return (
    <div className="bg-white h-[1315px] px-[39px] dark:bg-gray-800 flex-col flex-wrap hidden sm:hidden md:hidden lg:hidden xl:block">
      {data.map((icon, index) => (
        <div
          key={icon.alt ?? index}
          className="flex flex-col pt-[52px] gap-y-[174px] "
        >
          <Icon
            src={icon.label ?? ""}
            alt={icon.alt ?? "contrast"}
            height={30}
            width={30}
            quality={100}
            className="object-scale-down cursor-pointer dark:bg-[#ffffff] rounded-full"
            onClick={() => setDark((prev) => !prev)}
          />

          <div className="grid justify-center align-bottom gap-11">
            {icon.menuItems?.map((icons, index) => (
              <div
                key={icons.alt ?? index}
                className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#F0F0F6] dark:bg-white hover:bg-[#FFB400] cursor-pointer"
              >
                <Link href={icons.href ?? "#"}>
                  <Icon
                    src={icons.label ?? ""}
                    alt={icons.alt ?? "icon"}
                    height={18}
                    width={18}
                    quality={100}
                    className="object-scale-down"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
