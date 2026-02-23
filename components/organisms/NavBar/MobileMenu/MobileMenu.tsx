import {
  Button,
  Flex,
  HeadText,
  Icon,
  ParaText,
  MenuItem,
} from "@/components/atom";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const PageLinks = ["VIEW ALL PRODUCTS", "BUNDLES", "SUBSCRIPTION", "BLOG"];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed h-screen w-full transform bg-white px-4 py-3 transition md:w-[406px] overflow-auto right-0 top-0 translate-x-0 opacity-100 duration-500 ease-in-out z-50">
      <Flex
        className="flex justify-end p-4"
        data-testid="menu-closebutton-container"
      >
        <Button label="✕" onClick={onClose} />
      </Flex>
      <Flex className="px-6 flex-col gap-6">
        <div data-testid="menu-newitems-container">
          <HeadText
            content="NEW"
            className="text-blue-600 font-bold text-sm mb-2"
          />
          <Flex className="items-center gap-4 bg-gray-100 p-3 rounded-lg">
            <Icon
              src="https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/BluBox_StarterKit_PL-YClOYiS-.png"
              alt="Creamy Tobacco"
              className="w-12 h-12 object-contain"
              width={12}
              height={12}
            />
            <div>
              <HeadText content="CREAMY TOBACCO" className="font-semibold" />
              <ParaText
                content="Available in blu bar kit and blu pod"
                className="text-sm text-gray-600"
              />
            </div>
          </Flex>
        </div>
        <div role="headig">
          <HeadText
            content="SHOP BLU VAPE PRODUCTS"
            className="text-blue-600 font-bold text-sm"
          />
        </div>
        <Flex className="flex-col gap-4" data-testid="menu-menuitems-container">
          <MenuItem
            title="RECHARGEABLE VAPES"
            description="Sleek, simple, reusable and refillable vapes with a wide range of flavours."
            tClassName="text-blue-600 font-bold "
            dClassName="text-sm text-gray-600"
          />
          <MenuItem
            title="LIQUIDS AND PODS"
            description="Pocket sized, pre-filled, pre-changed and ready to use in a range of fruity flavours"
            tClassName="text-indigo-800 font-bold"
            dClassName="text-sm text-gray-600"
          />
        </Flex>
        <Flex
          className="flex-col gap-3 mt-4"
          data-testid="menu-pages-container"
        >
          {PageLinks.map((item) => (
            <ParaText
              key={item}
              content={`${item} >`}
              className="font-medium cursor-pointer"
            />
          ))}
        </Flex>
      </Flex>
      <Flex className="fixed bottom-0 w-full border-t border-indigo-800 px-6 py-4 items-start justify-evenly text-sm">
        <ParaText content="Store locator" className="font-medium" />
        <ParaText content="Help & support" className="font-medium" />
      </Flex>
    </div>
  );
}
