"use client";
import { useContext, useEffect, useState } from "react";
import {
  Button,
  Flex,
  HeadText,
  Icon,
  ParaText,
  Quantity,
} from "@/components/atom";
import { CartContext } from "@/components/organisms/Context/Context";
import ImageSlider from "@/components/organisms/ImageSlider/ImageSlider";
import { Product } from "@/Data/Type/Product/Product";
import QuickFlavourSelect from "@/components/molecules/QuickFlavour/QuickFlavourSelect";
import { FlavourData } from "@/Data/ProductData/Cafe/FlavourData";
import { FlavourProductData } from "@/Data/Type/Product/Flavour";

type SingleProductProps = {
  data: Product;
};

export default function SingleProductView({ data }: SingleProductProps) {
  const [quantity, setQuantity] = useState(1);
  const addtocart = useContext(CartContext);
  const addToCart = addtocart?.addToCart;

  const [flavourData, setFlavourData] = useState<FlavourProductData[]>([]);

  useEffect(() => {
    const quickFlavour = FlavourData.filter(
      (flavour) =>
        flavour.productType === data.productType ||
        flavour.flavorSystemType === data.flavourSystemType,
    );
    setFlavourData(quickFlavour);
  }, [data.productType, data.flavourSystemType]);

  if (!data) return null;

  return (
    <div>
      <div>
        <div className="grid gap-14 sm:grid md:grid lg:grid xl:flex pb-20">
          <div className="flex justify-center">
            <ImageSlider data={data.productimage ?? []} />
          </div>
          <div className="grid pt-7 pb-0 px-10 md:px-20 lg:px-20 xl:px-0">
            <div>
              <HeadText
                content={data.label ?? " "}
                className={`text-sky-500 text-5xl font-extrabold`}
              />
              <HeadText
                content={data.flavour ?? ""}
                className="text-blue-950 text-7xl font-extrabold"
              />
            </div>
            <HeadText
              content={`₹${data.price}`}
              className={`text-sky-500 text-6xl font-extrabold py-4`}
            />
            {flavourData.length >= 1 && (
              <>
                <ParaText
                  content={`Available Flavours: ${flavourData.length}`}
                  className="text-xl text-blue-950 font-bold py-3"
                />
                <div className="w-full flex flex-wrap overflow-x-scroll scroll-smooth no-scrollbar">
                  <QuickFlavourSelect data={flavourData} />
                </div>
              </>
            )}

            <Flex className="gap-5 py-4">
              <div>
                <ParaText
                  content="Nicotine strength"
                  className="text-md font-bold text-blue-950"
                />
                <Flex className="justify-center">
                  <Button
                    label={`${data.nicotine} mg/ml`}
                    className="bg-blue-950 text-white font-bold w-[120px] h-[40px] rounded-lg"
                  />
                </Flex>
              </div>
              <div>
                <ParaText
                  content="Quantity"
                  className="text-md font-bold text-blue-950"
                />
                <Quantity
                  value={quantity}
                  onChange={(val) => setQuantity(val)}
                  className="rounded-md"
                />
              </div>
            </Flex>
            <div className="py-4" data-testid="product-button">
              <div>
                <Button
                  label="Add to Cart"
                  className="rounded-lg bg-yellow-500 hover:bg-[#0099ff] hover:text-white w-[150px] h-[45px] font-bold text-lg"
                  onClick={() => {
                    addToCart?.({ ...data, quantity });
                  }}
                />
              </div>
              <ParaText
                content="Pay Securely"
                className="flex align-middle items-center font-semibold text-blue-950"
              />
            </div>

            <div className="gap-4 grid ">
              <Flex className="items-center gap-5">
                <Icon
                  src="https://images.ctfassets.net/r414rw797gvf/MTcyODk3OTMxNDAzMg/04e0d2c13e7dc9cb8177fddf712a2826/30_DAY_MONEYBACK_GUARANTEE.png?q=75&w=128"
                  alt="30days replacement"
                  height={48}
                  width={48}
                />
                <HeadText content="30 day money back guarantee" />
              </Flex>
              <Flex className="items-center gap-5">
                <Icon src="/clock.png" alt="ordertime" height={48} width={48} />
                <HeadText content="Order before 3 p.m. for same day shipping" />
              </Flex>
              <Flex className="items-center gap-5">
                <Icon src="/truck.png" alt="ordertime" height={48} width={48} />
                <HeadText content="Free shipping on orders over £25" />
              </Flex>
              <Flex className="items-center gap-5">
                <Icon
                  src="/return.png"
                  alt="ordertime"
                  height={48}
                  width={48}
                />
                <HeadText content="Free returns" />
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
