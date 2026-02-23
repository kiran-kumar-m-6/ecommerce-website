import { Flex, Icon } from "@/components/atom";

export default function ContactInformation() {
  return (
    <div className="pt-[70px] w-[370px]" id="target-contact">
      <h2 className="text-[#2B2B2B] text-[32px] font-bold text-center xl:text-left dark:text-white">
        Contact Information
      </h2>
      <div className="grid pt-[50px] gap-4">
        <div className="bg-white dark:bg-gray-800 px-[25px] pb-[16px] pt-[25px]">
          <div className="flex justify-center">
            <Icon
              src="/LocationIcon.png"
              alt="Location"
              width={18}
              height={18}
              className="object-scale-down bg-[#FFB400] rounded-full w-[40px] h-[40px]"
            />
          </div>

          <div className="pt-[31px]">
            <Flex className="justify-between">
              <p className="text-[#767676] text-sm dark:text-white">Country:</p>
              <p className="text-[#767676] text-sm dark:text-white">India</p>
            </Flex>

            <Flex className="justify-between pt-[16] pb-[18px]">
              <p className="text-[#767676] text-sm dark:text-white">City:</p>
              <p className="text-[#767676] text-sm dark:text-white">Delhi</p>
            </Flex>

            <Flex className="justify-between">
              <p className="text-[#767676] text-sm dark:text-white">Street:</p>
              <p className="text-[#767676] text-sm dark:text-white">
                Lajpat Rai Market
              </p>
            </Flex>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 px-[25px] pb-[12px] pt-[25px]">
          <div className="flex justify-center">
            <Icon
              src="/MailIcon.png"
              alt="Mail"
              width={18}
              height={18}
              className="object-scale-down bg-[#FFB400] rounded-full w-[40px] h-[40px]"
            />
          </div>

          <div className="pt-[31px]">
            <Flex className="justify-between">
              <p className="text-[#767676] text-sm dark:text-white">Email:</p>
              <p className="text-[#767676] text-sm dark:text-white">
                youremail@gmail.com
              </p>
            </Flex>

            <Flex className="justify-between py-[16px]">
              <p className="text-[#767676] text-sm dark:text-white">Skype:</p>
              <p className="text-[#767676] tex-sm dark:text-white">
                @yourusername
              </p>
            </Flex>

            <Flex className="justify-between">
              <p className="text-[#767676] text-sm dark:text-white">
                Telegram:
              </p>
              <p className="text-[#767676] text-sm dark:text-white">
                @yourusername
              </p>
            </Flex>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 px-[25px] pb-[17px] pt-[25px]">
          <div className="flex justify-center">
            <Icon
              src="/MobileIcon.png"
              alt="Mobile"
              width={18}
              height={18}
              className="object-scale-down bg-[#FFB400] rounded-full w-[40px] h-[40px]"
            />
          </div>

          <div className="pt-[31px]">
            <Flex className="justify-between">
              <p className="text-[#767676] text-sm dark:text-white">
                @yourusername:
              </p>
              <p className="text-[#767676] text-sm dark:text-white">15369</p>
            </Flex>

            <Flex className="justify-between pt-[15px] pb-[17px]">
              <p className="text-[#767676] text-sm dark:text-white">Office:</p>
              <p className="text-[#767676] text-sm dark:text-white">
                +58 (021)356 587 235
              </p>
            </Flex>

            <Flex className="justify-between">
              <p className="text-[#767676] text-sm dark:text-white">
                Personal:
              </p>
              <p className="text-[#767676] text-sm dark:text-white">
                +58 (021)356 587 235
              </p>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
}
