import { Button, Flex, HeadText, Icon, ParaText } from "@/components/atom";
import { useBreakPoint } from "@/hook/useBreakPoint";

type PopUpProps = {
  image: string;
  head: string;
  footer: string;
  btnText: string;
  btnClass: string;
};

type PopData = {
  data: PopUpProps[];
  open: boolean;
  onClose?: () => void;
};

export default function PopUp({ data, open, onClose }: PopData) {
  const screen = useBreakPoint();

  if (!open) return null;

  const imageSize = (() => {
    switch (screen) {
      case "sm":
        return { width: 500, height: 500 };
      case "md":
        return { width: 610, height: 610 };
      case "lg":
        return { width: 500, height: 500 };
      default:
        return { width: 515, height: 515 };
    }
  })();

  return (
    <Flex className="fixed inset-0 z-50 items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      {data.map((src, index) => (
        <Flex
          key={src.head ?? index}
          className="relative bg-white w-full max-w-5xl flex-col md:flex-row overflow-hidden"
        >
          <Button
            label="✕"
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl text-black-600 md:text-gray-600 hover:text-black"
          />
          <Flex className="w-full md:w-1/2 items-center justify-center">
            <Icon
              src={src.image}
              alt="new product"
              width={imageSize.width}
              height={imageSize.height}
              className="object"
            />
          </Flex>
          <Flex className="w-full md:w-1/2 flex-col justify-center px-8 py-10 gap-6 text-center md:text-left">
            <HeadText
              content={src.head}
              className="text-4xl font-extrabold text-[#0a1b5e] leading-tight"
            />
            <ParaText
              content={src.footer}
              className="text-gray-700 text-base max-w-md"
            />
            <Flex className="flex-col md:flex-row md:gap-5 items-center md:justify-between">
              <Button
                label={src.btnText}
                className={`${src.btnClass} px-8 py-3 rounded-md font-semibold text-black`}
              />
              <ParaText
                content={screen}
                className="border rounded-md text-center p-3 md:w-[80px] font-semibold"
              />
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
