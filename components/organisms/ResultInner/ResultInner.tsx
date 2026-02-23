import { Button, Flex, HeadText } from "@/components/atom";
import { useEffect, useState } from "react";

type ResultValues = {
  pods: number;
};

export default function ResultInner({ pods = 1 }: ResultValues) {
  const [prices, setPrices] = useState({
    price: 0,
    subType: "",
  });

  useEffect(() => {
    if (pods === 1) {
      setPrices({ price: 0, subType: "" });
    } else if (pods === 2) {
      setPrices({ price: 5.81, subType: "BRONZE" });
    } else if (pods === 3) {
      setPrices({ price: 5.31, subType: "SILVER" });
    } else {
      setPrices({ price: 4.75, subType: "GOLD" });
    }
  }, [pods]);

  return (
    <div className="grid md:pl-10 md:border-l p-4">
      <Flex className="justify-between">
        <HeadText
          content="YOUR SUBSCRIPTION TIER &nbsp;"
          className="text-white"
        />
        <HeadText
          content={`${prices.subType}`}
          className="text-white font-semibold"
        />
      </Flex>
      <Flex className="justify-between">
        <HeadText content="WITHOUT SUBSCRIPTION" className="text-white" />
        <HeadText content={`6.99/pack`} className="text-white font-semibold" />
      </Flex>
      <Flex className="justify-between">
        <HeadText content="WITH SUBSCRIPTION" className="text-sky-600" />
        <HeadText
          content={`${pods === 1 ? "6.99" : prices.price}/pack`}
          className="text-sky-600 font-semibold"
        />
      </Flex>

      <div className="bg-sky-600 rounded-lg mt-3 px-16 text-center align-middle">
        <div className="p-4">
          <HeadText content="ANNUAL SAVINGS" className="text-white" />
          <HeadText
            content={`${pods === 1 ? 0 : Math.round(prices.price * (pods * 52))}`}
            className="text-white text-5xl"
          />
        </div>
      </div>
      <Flex className="mt-5 justify-center align-middle">
        <Button
          label="START YOUR SUBSCRIPTION NOW"
          className="bg-yellow-500 rounded-md px-5 py-3 text-blue-800 font-bold"
        />
      </Flex>
    </div>
  );
}