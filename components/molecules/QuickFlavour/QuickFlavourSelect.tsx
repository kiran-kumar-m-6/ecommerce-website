import { Flex, HeadText, Icon } from "@/components/atom";
import { FlavourProductData } from "@/Data/Type/Product/Flavour";

type Props = {
  data?: FlavourProductData[];
};

export default function QuickFlavourSelect({ data }: Props) {
  return (
    <div className="relative scrollbar-hide">
      <div className="flex gap-3">
        {data?.map((flavour: FlavourProductData, index: number) => (
          <Flex
            key={flavour.title ?? index}
            className="relative
            border border-gray-400 rounded-md
            w-[140px] h-[180px]
            flex-col items-center justify-center hover:border-sky-500 hover:border-2 p-3 mt-auto scrollbar-hide
          "
          >
            <Icon
              src={flavour.variants[0].media.plp?.url ?? ""}
              alt={flavour.title ?? "flavour"}
              height={80}
              width={80}
              className="mb-2 mt-auto"
            />
            <HeadText
              content={flavour.title ?? ""}
              className="text-xs text-blue-950 text-center mt-auto uppercase"
            />
          </Flex>
        ))}
      </div>
    </div>
  );
}
