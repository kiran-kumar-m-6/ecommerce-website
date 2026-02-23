import { useContext } from "react";
import { Button, Flex, ParaText } from "@/components/atom";
import IconAndHeading from "@/components/molecules/Product/IconAndHeading";
import { CartContext } from "@/components/organisms/Context/Context";
import { Product } from "@/Data/Type/Product/Product";
import Link from "next/link";

interface Props {
  data: Product[];
}

export default function ProductGrid({ data }: Props) {
  const addtocart = useContext(CartContext);
  const addToCart = addtocart?.addToCart;

  return (
    <Flex
      className="bg-white flex-wrap justify-center gap-4 my-5"
      data-testid="product-grid"
    >
      {data.map((item, index) => (
        <Flex
          key={item.id ?? index}
          className="w-[300px] rounded-lg shadow-xl border-black p-5 flex-col gap-3"
          data-testid="product-view"
        >
          <Link href={`/restaurant/product/${item.id.toLowerCase()}`}>
            <Flex
              className="items-start justify-center"
              data-testid="IconAndHeading"
            >
              <IconAndHeading
                image={item.image}
                name={item.name ?? ""}
                price={item.price ?? 0}
              />
            </Flex>
          </Link>
          <ParaText
            content={item.description}
            className="text-sky-950 text-xl text-center"
          />
          <Flex className="justify-center py-4" data-testid="product-button">
            <Button
              label={item.btnText}
              className="rounded-lg bg-sky-950 text-white font-semibold text-xl hover:bg-[#396887] w-[150px] h-[45px]"
              onClick={() => {
                addToCart?.({ ...item, quantity: 1 });
              }}
            />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
