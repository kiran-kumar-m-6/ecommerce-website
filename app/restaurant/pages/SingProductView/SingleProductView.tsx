"use client";
import {
  Button,
  Flex,
  HeadText,
  Icon,
  ParaText,
  Quantity,
} from "@/components/atom";
import { Product } from "@/Data/Type/Product/Product";
import { useContext, useState } from "react";
import Offers from "@/components/molecules/Offers/Offers";
import { CartContext } from "@/components/organisms/Context/Context";

type Props = {
  data: Product;
};

export default function SingleProductView({ data }: Props) {
  const [quantity, setQuantity] = useState(1);
  const addtocart = useContext(CartContext);
  const addToCart = addtocart?.addToCart;

  return (
    <div className="flex justify-center px-6">
      <div className="gap-6 bg-sky-50 md:flex lg:flex">
        <div className="grid justify-center md:flex lg:flex">
          <Icon
            src={data.fullImage ?? ""}
            alt={data.name ?? ""}
            height={500}
            width={500}
            className="position:absolute height:100% width:100% left:0 top:0 right:0 bottom:0 object-fit:cover color:transparent"
          />
        </div>
        <div className="pt-6 px-6">
          <div className="grid gap-5 text-center md:text-left">
            <HeadText
              content={data.name ?? ""}
              className="text-5xl font-extrabold text-sky-950"
            />
            <ParaText
              content={`₹${data.price ?? ""}`}
              className="text-4xl font-bold text-sky-950"
            />
          </div>
          <div className="text-center md:text-left">
            <ParaText
              content={data.description ?? ""}
              className="text-xl text-sky-950 py-4 border-b border-sky-950"
            />
          </div>
          <div className="">
            <Flex className="gap-5 border-b border-sky-950 py-6 justify-center md:justify-start">
              <Quantity
                value={quantity}
                onChange={setQuantity}
                className="border-sky-950 rounded-full"
              />
              {quantity >= 1 ? (
                <Button
                  label="ADD TO CART"
                  className="bg-sky-950 text-white font-bold px-6 py-2 rounded-3xl"
                  onClick={() => addToCart?.({ ...data, quantity: quantity })}
                />
              ) : (
                <Button
                  label="ADD TO CART"
                  className="bg-gray-500 text-white font-bold px-6 py-2 rounded-3xl"
                />
              )}
            </Flex>
          </div>
          <div>
            <Offers />
          </div>
        </div>
      </div>
    </div>
  );
}
