import { Button, Flex, Icon } from "@/components/atom";
import { LeftMenuProps } from "@/Data/Type/PortFolio/LeftMenu";
import Link from "next/link";

type Props = {
  data: LeftMenuProps[];
};

export default function SideBar({ data }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 h-[1315px] hidden sm:hidden md:hidden lg:hidden xl:block">
      {data.map((item, index) => (
        <div
          key={item.name ?? index}
          className="grid items-center justify-center pl-[40px] pr-[46px] pt-[50px]"
        >
          <div className="border-b-2 border-[#E4E6EB] pb-[25px] ">
            <div className="flex justify-center ">
              <div className="bg-[#F0F0F6] dark:bg-gray-600 object-cover flex items-center justify-center align-middle rounded-full overflow-hidden">
                <Icon
                  src={item.image ?? ""}
                  alt={item.name ?? "my photo"}
                  className="object-contain w-[150px] h-[150px]"
                  height={150}
                  width={150}
                  quality={100}
                />
              </div>
            </div>

            <div>
              <h4 className="dark:text-white capitalize font-bold text-center text-lg pt-[31px] ">
                {item.name ?? "name"}
              </h4>
              <div className="pl-[78px] pr-[84px]">
                <p className="text-gray-500 dark:text-gray-400 capitalize  text-center pt-[15px]">
                  {item.designation ?? "designation"}
                </p>
              </div>
            </div>

            <div className="pt-[15px]">
              <div className="flex justify-center align-middle items-center gap-3 h-[24px]">
                {item.socialmedia?.map((icon, index) => (
                  <div
                    key={index}
                    className="rounded-full grid items-center justify-center bg-[#FFB400] w-[24px] h-[24px] cursor-pointer"
                  >
                    <Link href={icon.href ?? "#"}>
                      <Icon
                        src={icon.icon ?? ""}
                        alt={icon.alt ?? ""}
                        width={14}
                        height={14}
                        quality={100}
                        className="object-scale-down"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-[25px] border-b-2 border-[#E4E6EB]">
            <div className="flex justify-between">
              <p className="bg-[#FFB400F2] pl-[5px] pr-[6px] py-[1px] text-[#2B2B2B] text-sm">
                Age:
              </p>
              <p className="text-[#2B2B2B] dark:text-white text-sm">
                {item.age ?? 0}
              </p>
            </div>

            <div className="flex justify-between pt-[9px]">
              <p className="bg-[#FFB400F2] pl-[5px] pr-[6px] py-[1px] text-[#2B2B2B] text-sm">
                Residence:
              </p>
              <p className="uppercase text-[#2B2B2B] dark:text-white text-sm">
                {item.residence ?? "Residence"}
              </p>
            </div>

            <div className="flex justify-between pt-[10px]">
              <p className="bg-[#FFB400F2] pl-[5px] pr-[6px] py-[1px] text-[#2B2B2B] text-sm">
                Freelance:
              </p>
              {item.freelance === true ? (
                <p className="text-[#7EB942] dark:text-green-700 transition-colors text-sm">
                  Available
                </p>
              ) : (
                <p className="text-[#d31010] dark:text-red-700 transition-colors text-sm">
                  Not Available
                </p>
              )}
            </div>

            <div className="flex justify-between pt-[10px]">
              <p className="bg-[#FFB400F2] pl-[5px] pr-[6px] py-[1px] text-[#2B2B2B] text-sm">
                Address:
              </p>
              <p className="capitalize text-[#2B2B2B] dark:text-white text-sm">
                {item.address ?? "Address"}
              </p>
            </div>
          </div>

          <div className="border-b-2 py-[25px] border-[#E4E6EB]">
            <h4 className="text-[#2B2B2B] dark:text-white capitalize font-bold pb-[10px]">
              Languages
            </h4>
            {item.languages?.map((language, index) => (
              <div
                key={language.known ?? index}
                className="py-[5px] flex flex-col gap-2"
              >
                <Flex className="justify-between h-[20px] pb-[4px]">
                  <p className="capitalize text-[#767676] dark:text-white text-sm">
                    {language.language}
                  </p>
                  <p className="text-[#767676] dark:text-white text-sm">
                    {`${language.known ?? 100}%`}
                  </p>
                </Flex>

                <progress
                  max={100}
                  value={language.known ?? 100}
                  className="w-full h-[4px] progress"
                />
              </div>
            ))}
          </div>

          <div className="border-b-2 border-[#E4E6EB] py-[25px] ">
            <h4 className="text-[#2B2B2B] dark:text-white capitalize font-bold pb-[10px]">
              Skills
            </h4>
            {item.skills?.map((skill, index) => (
              <div key={index} className="py-[5px] flex flex-col gap-2">
                <Flex className="justify-between h-[20px] pb-[5px]">
                  <p className="capitalize text-[#767676] dark:text-white text-sm">
                    {skill.skill}
                  </p>
                  <p className="text-[#767676] dark:text-white text-sm">
                    {`${skill.known ?? 100}%`}
                  </p>
                </Flex>

                <progress
                  max={100}
                  value={skill.known ?? 100}
                  className="w-full h-[4px] progress"
                />
              </div>
            ))}
          </div>

          <div className="border-b-2 border-[#E4E6EB] py-[25px]">
            <h4 className="text-[#2B2B2B] dark:text-white capitalize font-bold pb-[10px]">
              Extra Skills
            </h4>
            {item.extraskills?.map((skill, index) => (
              <div
                key={index}
                className="pt-[5px] h-[24px] flex items-center overflow-hidden"
              >
                <Flex className="gap-[15px] items-center">
                  <Icon
                    src="/bulletPoint.png"
                    alt="➜ point"
                    width={15}
                    height={15}
                    className="object-scale-down"
                  />
                  <p className="capitalize text-sm text-[#767676] dark:text-white leading-tight truncate">
                    {skill.skill}
                  </p>
                </Flex>
              </div>
            ))}
          </div>
          <div className="flex justify-center py-[25px] pl-[40px] pr-[45px] ">
            <Button
              label="DOWNLOAD CV"
              className="bg-[#FFB400F2] text-sm  text-black w-[220px] h-[40px] pl-[40px] pr-[72px] pt-[10px] pb-[10.57]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
