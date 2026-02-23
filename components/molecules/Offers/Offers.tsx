import { Flex, Icon, ParaText } from "@/components/atom";

export default function Offers() {
  return (
    <div className="py-8">
      <Flex className="gap-3 py-2">
        <Icon
          src="https://images.ctfassets.net/cmz1u2vjgn0q/MTczMDg5MDE0OTk0Ng/9e562c86e1596c2aa6f3c90b6e9e0148/Pulze_Website_Arch_01_Desktop_Device_PDP_Page_USP_Free_Delivery_24x24px.svg"
          alt="free shipping"
        />
        <ParaText
          content="Free shipping over ₹ 20"
          className="text-xl text-sky-950"
        />
      </Flex>
      <Flex className="gap-3 py-2">
        <Icon
          src="https://images.ctfassets.net/cmz1u2vjgn0q/MTczMDg5MDE1MDUxMg/b578ffb0a021f0b690f1d8c248b67062/PULZE_Box_Now_Icon1_v01__1___1_.svg"
          alt="free delivery"
        />
        <ParaText
          content="Fast delivery 24/7 with BOX NOW"
          className="text-xl text-sky-950"
        />
      </Flex>
      <Flex className="gap-3 py-2">
        <Icon
          src="https://images.ctfassets.net/cmz1u2vjgn0q/MTczMDg5MDE1MDU1Ng/215398e5deccf85615c46544e23dba0e/Arc1_Shop_ProductConfigurator_Icon4_placeholder_Desktop__1_.svg"
          alt="PULZE On Points"
        />
        <ParaText
          content="PULZE ON points that unlock unique rewards and discount coupons"
          className="text-xl text-sky-950"
        />
      </Flex>
      <Flex className="gap-3 py-2">
        <Icon
          src="https://images.ctfassets.net/cmz1u2vjgn0q/MTczMDg5MDE0OTk0OA/12ea34506d85564b26477cf5c2a90114/Arc1_Shop_ProductConfigurator_Icon2_placeholder_Desktop__1_.svg"
          alt="free shipping"
        />
        <ParaText
          content="Device registration for 12-month warranty"
          className="text-xl text-sky-950"
        />
      </Flex>
      <Flex className="gap-3 py-2">
        <Icon
          src="https://images.ctfassets.net/cmz1u2vjgn0q/MTczMDg5MDE1MDA2OA/3dc1cc41eeb7ec05b9ad93f8e10d8c6e/Pulze_Website_Arch_01_Desktop_Device_PDP_Page_USP_3Support_Team_24x24px.svg"
          alt="pulze care"
        />
        <ParaText
          content="PULZE Care Customer Service, Monday-Friday 09:00-21:00 & Saturday 09:00-19:00"
          className="text-xl text-sky-950"
        />
      </Flex>
      <Flex className="gap-3 py-2">
        <Icon
          src="https://images.ctfassets.net/cmz1u2vjgn0q/7iGi3MXZbAQbhDEcwie1FJ/1c89264173f06d5db9317f641361cc11/Frame_1171277155.png?q=75&w=128"
          alt="compitable with all PULZE devices"
        />
        <ParaText
          content="iD and iSENZIA rods are compatible with all PULZE devices"
          className="text-xl text-sky-950"
        />
      </Flex>
    </div>
  );
}
