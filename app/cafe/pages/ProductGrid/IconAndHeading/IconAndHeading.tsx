import { Flex, HeadText, Icon } from "@/components/atom";

interface IconAndHeadProps {
  image: string;
  price: string;
  textClass: string;
  label: string;
  flavour: string;
}

export default function IconAndHeading({
  image,
  label,
  price,
  textClass,
  flavour,
}: IconAndHeadProps) {
  return (
    <Flex className="items-center gap-6">
      <Flex className="flex-col">
        <HeadText
          content={label}
          className={`${textClass} text-sky-500 text-lg font-extrabold`}
        />
        <HeadText
          content={flavour}
          className="text-blue-950 text-xl font-extrabold hover:underline hover:decoration-sky-500"
        />
        <HeadText
          content={price}
          className={`${textClass} text-sky-500 text-3xl font-bold`}
        />
      </Flex>
      <Icon
        src={image || ""}
        alt={flavour || "product"}
        className="max-w-[120px] md:max-w-[150px] h-auto"
        width={120}
        height={150}
      />
    </Flex>
  );
}
