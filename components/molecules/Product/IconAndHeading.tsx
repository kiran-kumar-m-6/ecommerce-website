import { Flex, HeadText, Icon } from "@/components/atom";

interface IconAndHeadProps {
  image?: string;
  name?: string;
  price?: number;
}

export default function IconAndHeading({
  image,
  name,
  price,
}: IconAndHeadProps) {
  return (
    <div className="items-center justify-center align-middle gap-5">
      <Icon
        src={image ?? ""}
        alt={name ?? ""}
        className="h-auto"
        width={270}
        height={300}
      />
      <Flex className="flex-col justify-center text-center py-4">
        <HeadText
          content={name ?? ""}
          className={`font-bold text-2xl text-sky-950`}
        />
        <HeadText
          content={`₹${price}`}
          className={`font-bold text-xl text-sky-950`}
        />
      </Flex>
    </div>
  );
}
