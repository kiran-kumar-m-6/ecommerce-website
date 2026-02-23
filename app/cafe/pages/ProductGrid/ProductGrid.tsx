import { useContext, useState } from "react";
import {
  Icon,
  Button,
  Flex,
  ParaText,
  Quantity,
  HeadText,
} from "@/components/atom";
import { CartContext } from "@/components/organisms/Context/Context";
import Link from "next/link";
import { Product } from "@/Data/Type/Product/Product";

interface Props {
  data: Product[];
}

export default function ProductGrid({ data }: Props) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const addtocart = useContext(CartContext);
  const addToCart = addtocart?.addToCart;

  const getQty = (id: string) => quantities[id] ?? 1;

  const updateQty = (id: string, value: number) => {
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <Flex className="bg-white flex-wrap justify-center gap-4 my-5">
      {data.map((item, index) => (
        <Flex
          key={item.id ?? index}
          className="w-[300px] rounded-lg shadow-xl border-black p-5 flex-col gap-3 cursor-pointer"
        >
          <Flex className="items-start">
            <Flex className="items-center gap-6">
              <Flex className="flex-col">
                <HeadText
                  content={item.label ?? ""}
                  className="text-sky-500 text-lg font-extrabold"
                />
                <Link href={`/cafe/product/${item.id}`}>
                  <HeadText
                    content={item.flavour ?? ""}
                    className="text-blue-950 text-xl font-extrabold hover:underline hover:decoration-sky-500"
                  />
                </Link>
                <HeadText
                  content={`₹${item.price}`}
                  className="text-sky-500 text-3xl font-bold"
                />
              </Flex>
              <Icon
                src={item.image ?? ""}
                alt={item.flavour ?? ""}
                className="max-w-[120px] md:max-w-[150px] h-auto"
                width={120}
                height={150}
              />
            </Flex>
          </Flex>
          <ParaText
            content={item.description}
            className="pt-6 text-blue-950 font-semibold"
          />
          <div>
            <ParaText
              content="Nicotine strength"
              className="text-blue-950 font-semibold mb-0"
            />
            <Button
              label={`${item.nicotine} mg/ml`}
              className="text-blue-950 border border-blue-950 rounded-lg w-[120px] h-[40px] mt-0"
            />
          </div>
          <div>
            <ParaText
              content="Quantity"
              className="text-blue-950 font-semibold mb-0"
            />
            <Quantity
              value={getQty(item.id)}
              onChange={(val) => updateQty(item.id, val)}
              className="rounded-md"
            />
          </div>
          <Flex className="justify-center pt-6">
            <Button
              label={item.btnText}
              className={item.btnClass}
              onClick={() => {
                const qty = getQty(item.id);
                addToCart?.({ ...item, quantity: qty });
              }}
            />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
