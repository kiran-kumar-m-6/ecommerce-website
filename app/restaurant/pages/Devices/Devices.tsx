"use client";
import { useContext, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Flex, HeadText, ParaText, Button, Icon } from "@/components/atom";
import ImageSlider from "@/components/organisms/ImageSlider/ImageSlider";
import BulletPoints from "@/components/molecules/BulletPoints/BulletPoints";
import Packages from "../Packages/Packages";
import { productData } from "@/Data/ProductData/Restaurant/productData";
import Offers from "@/components/molecules/Offers/Offers";
import { Product } from "@/Data/Type/Product/Product";
import { CartContext } from "@/components/organisms/Context/Context";

type FormValues = Record<string, number>;

type Images = {
  image: string;
};

type Bullets = {
  point: string;
};

type RequiredData = {
  heading: string;
  price: number;
  description: string;
  bullets: Bullets[];
  productImages: Images[];
};

type Props = {
  data: RequiredData;
};

export default function Devices({ data }: Props) {
  const [viewPackages, setViewPackages] = useState(false);
  const [viewSelectedPack, setViewSelectedPack] = useState(false);
  const addtoCart = useContext(CartContext);
  const addToCart = addtoCart?.addToCart;
  const { control, setValue } = useForm<FormValues>({
    defaultValues: {},
    mode: "onChange",
  });
  const quantities = useWatch({ control });

  const selectedCount = Object.values(
    quantities as Record<string, number>,
  ).reduce((a, b) => a + b, 0);

  const selectedProducts: Product[] = [];

  for (const id in quantities) {
    const qty = quantities[id] ?? 0;
    if (qty > 0) {
      const product = productData.find((p) => p.id === id);
      if (product) {
        selectedProducts.push({
          ...product,
          quantity: qty,
        });
      }
    }
  }

  if (!data) return null;

  return (
    <div className="flex justify-center px-20">
      <Flex className="gap-4 bg-sky-50">
        <ImageSlider data={data.productImages} />
        <div className="pl-6 pt-7 pr-6">
          <div>
            <HeadText
              content={data.heading}
              className="text-sky-950 text-6xl font-bold"
            />
            <ParaText
              content={`₹ ${data.price}`}
              className="text-sky-950 text-4xl font-bold py-3"
            />
          </div>
          <div className="py-6">
            <ParaText
              content={data.description}
              className="text-sky-950 text-3xl pb-4 border-b border-[#054763]"
            />
          </div>
          {data.bullets && (
            <div className="pt-4">
              <BulletPoints data={data.bullets} />
            </div>
          )}
          <div>
            <Flex className="justify-between gap-5 border-t border-sky-950 py-6">
              <ParaText
                content={`${selectedCount}/3 selected`}
                className="text-sky-950 text-2xl font-semibold"
              />
              <Button
                label={viewSelectedPack ? "˅" : "^"}
                className="text-3xl text-sky-950"
                onClick={() => setViewSelectedPack((v) => !v)}
              />
            </Flex>
            {viewSelectedPack && (
              <div>
                {selectedProducts &&
                  selectedProducts.map((p) => (
                    <Flex key={p.id} className="gap-5 py-2">
                      <Icon
                        src={p.sideAngleImage ?? ""}
                        alt={p.name ?? ""}
                        height={100}
                        width={100}
                      />
                      <div>
                        <ParaText
                          content={p.name}
                          className="text-sky-950 text-2xl font-bold"
                        />
                        <ParaText
                          content={`x ${p.quantity}`}
                          className="text-sky-950 text-2xl font-bold"
                        />
                      </div>
                    </Flex>
                  ))}
              </div>
            )}
          </div>
          <div>
            <Flex className="gap-5 border-t border-sky-950 border-b py-6">
              {selectedCount >= 1 ? (
                <Flex className="gap-5">
                  <Button
                    label="EDIT"
                    className="border-[#054763] border-2 text-sky-950 text-xl font-bold px-7 py-2 rounded-full hover:border-[#396887] hover:text-[#396887]"
                    onClick={() => setViewPackages(true)}
                  />
                  {selectedCount === 3 ? (
                    <Button
                      label="ADD TO CART"
                      className="bg-[#054763] text-white font-bold px-7 py-2 rounded-full text-xl hover:bg-[#4381ac]"
                      onClick={() => {
                        selectedProducts.forEach((product) =>
                          addToCart?.({
                            ...product,
                            quantity: product.quantity,
                          }),
                        );
                        console.log(selectedProducts);
                      }}
                    />
                  ) : (
                    <Button
                      label="ADD TO CART"
                      className="bg-gray-500 text-white font-bold px-7 py-2 rounded-full text-xl"
                      disabled
                    />
                  )}
                </Flex>
              ) : (
                <Flex className="gap-5">
                  <Button
                    label="CHOOSE PACKAGES"
                    className="border-[#054763] border-2 text-sky-950 text-xl font-bold px-7 py-2 rounded-full hover:border-[#396887] hover:text-[#396887]"
                    onClick={() => setViewPackages(true)}
                  />
                  <Button
                    label="ADD TO CART"
                    className="bg-gray-500 text-white font-bold px-7 py-2 rounded-full text-xl"
                    disabled
                  />
                </Flex>
              )}
            </Flex>
          </div>
          <Offers />
        </div>
      </Flex>
      <Packages
        data={productData}
        open={viewPackages}
        onClose={() => {
          setViewPackages(false);
        }}
        control={control}
        setValue={setValue}
      />
    </div>
  );
}
