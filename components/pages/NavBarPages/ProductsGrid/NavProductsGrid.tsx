import { Flex, HeadText, Icon, ParaText } from "@/components/atom";

type PropsData = {
  image: string;
  alt: string;
  heading: string;
  description: string;
  price?: number | undefined;
  available?: number | undefined;
};

type Props = {
  data: PropsData[];
  className?: string;
};

export default function NavProductsGrid({ data, className }: Props) {
  return (
    <Flex className={`gap-10 p-10 cursor-pointer ${className}`}>
      {data.map((item, index) => (
        <div key={item.heading ?? index} className="grid gap-2 hover:scale-105">
          <Flex className="justify-center">
            <Icon
              src={item.image}
              alt={item.alt}
              width={196}
              height={196}
              className="cursor-pointer hover:scale-105 duration-200"
            />
          </Flex>
          <div>
            <HeadText
              content={item.heading}
              className="text-blue-500 font-bold text-center"
            />
            {item.available !== undefined && (
              <ParaText
                content={`Kits available: ${item.available}`}
                className="text-blue-500 text-center"
              />
            )}
            <ParaText
              content={item.description}
              className="text-blue-500 text-center"
            />
            {item.price !== undefined && (
              <ParaText
                content={`Price: ₹${item.price}`}
                className="text-blue-500 text-center"
              />
            )}
          </div>
        </div>
      ))}
    </Flex>
  );
}
