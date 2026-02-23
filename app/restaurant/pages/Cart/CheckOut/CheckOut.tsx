import { useContext, useState } from "react";
import {
  Flex,
  HeadText,
  Icon,
  ParaText,
  QuantitySelector,
  Button,
  Input,
} from "@/components/atom";
import { CartContext } from "@/components/organisms/Context/Context";

export default function CheckOut() {
  const [purchaseType, setPurchaseType] = useState<"simple" | "subscription">(
    "simple",
  );
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const cartItems = useContext(CartContext);
  const cart = cartItems?.cart || [];
  const getQty = (id: string) => {
    const item = cart.find((p) => p.id === id);
    return quantities[id] ?? item?.quantity ?? 1;
  };

  const updateQty = (id: string, value: number) => {
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div>
      <Flex className="justify-evenly">
        <div className="pt-20 w-full px-20">
          <div>
            <HeadText content="Basket" className="text-5xl text-sky-950" />
          </div>
          <div className="w-full">
            {cart.map((product, index) => (
              <Flex
                key={product.id ?? index}
                className="gap-10 bg-sky-100 rounded-2xl w-full my-4 px-3 py-2"
              >
                <div>
                  <Icon
                    src={product.fullImage ?? ""}
                    alt={product.name ?? ""}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="w-full">
                  <Flex className="justify-between py-3">
                    <ParaText
                      content={product.name}
                      className="text-sky-950 text-xl font-semibold"
                    />
                    <ParaText
                      content={`₹${Number(product.price) * Number(getQty(product.id))}`}
                      className="text-sky-950 text-xl font-bold"
                    />
                  </Flex>
                  <Flex className="py-4 gap-7">
                    <QuantitySelector
                      value={getQty(product.id) ?? 1}
                      max={10}
                      onChange={(qty) => updateQty(product.id, qty)}
                    />
                    <Button
                      label="REMOVAL"
                      className="border-2 border-sky-950 px-6 py-2 rounded-xl"
                    />
                  </Flex>
                </div>
              </Flex>
            ))}
          </div>
        </div>
        <div className="bg-sky-50 pt-16 px-16">
          <HeadText
            content="Purchase Options"
            className="text-sky-950 text-5xl"
          />
          <Flex className="border-2 border-sky-950 rounded-lg my-4">
            <label className="px-9 py-2 flex items-center cursor-pointer">
              <Input
                type="radio"
                name="purchaseType"
                value="simple"
                checked={purchaseType === "simple"}
                onChange={() => setPurchaseType("simple")}
              />
              <span className="text-sky-950 font-semibold px-5">
                Simple Purchase
              </span>
            </label>

            <label className="border-l-2 border-sky-950 px-9 py-2 flex items-center cursor-pointer">
              <Input
                type="radio"
                name="purchaseType"
                value="subscription"
                checked={purchaseType === "subscription"}
                onChange={() => setPurchaseType("subscription")}
              />
              <span className="text-sky-950 font-semibold px-5">
                Subscription
              </span>
            </label>
          </Flex>
          {purchaseType === "simple" && (
            <div className="py-5">
              <HeadText content="Code" className="text-4xl text-sky-950" />
              <div className="flex gap-3 pt-3 pb-6">
                <Input
                  type="text"
                  id="code"
                  name="code"
                  placeholder="Code"
                  className="w-full sm:w-[400px] md:w-[350px] h-[40px] rounded-full border-sky-950"
                />
                <Button
                  label="SUBMISSION"
                  className="border border-sky-950 text-sky-950 px-6 py-2 rounded-full"
                />
              </div>
              <HeadText content="Summary" className="text-4xl text-sky-950" />
              <Flex className="justify-between py-3 border-b border-gray-300">
                <ParaText content="Partial Set" className="text-sky-950" />
                <ParaText content={`₹ ${68.0}`} className="text-sky-950" />
              </Flex>
              <Flex className="justify-between py-3 border-b border-gray-300">
                <ParaText content="Shipment" className="text-sky-950" />
                <ParaText content="Free Shipping" className="text-sky-950" />
                <ParaText content="..." className="text-sky-950" />
              </Flex>
              <Flex className="justify-between py-3 border-b border-gray-300">
                <HeadText content="Total" className="text-sky-950" />
                <HeadText content={`₹ ${68.0}`} className="text-sky-950" />
              </Flex>
              <Flex className="py-10">
                <Button
                  label="INTEGRATION"
                  className="bg-sky-950 text-white font-bold w-full rounded-full py-2"
                />
              </Flex>
            </div>
          )}

          {purchaseType === "subscription" && (
            <div className="py-5">
              <HeadText content="Frequency" className="text-4xl text-sky-950" />
              <div className="pb-6 pt-2">
                <ParaText
                  content="28 days"
                  className="border border-sky-950 rounded-full w-full px-4 py-2"
                />
              </div>
              <HeadText content="Code" className="text-4xl text-sky-950" />
              <div className="flex gap-3 pt-3 pb-6">
                <Input
                  type="text"
                  id="code"
                  name="code"
                  placeholder="Code"
                  className="w-full sm:w-[400px] md:w-[350px] h-[40px] rounded-full border-sky-950"
                />
                <Button
                  label="SUBMISSION"
                  className="border border-sky-950 text-sky-950 px-6 py-2 rounded-full"
                />
              </div>
              <HeadText content="Summary" className="text-4xl text-sky-950" />
              <Flex className="justify-between py-3 border-b border-gray-300">
                <ParaText content="Partial Set" className="text-sky-950" />
                <ParaText content={`₹ ${68.0}`} className="text-sky-950" />
              </Flex>
              <Flex className="justify-between py-3 border-b border-gray-300">
                <ParaText content="Shipment" className="text-sky-950" />
                <ParaText content="Free Shipping" className="text-sky-950" />
                <ParaText content="..." className="text-sky-950" />
              </Flex>
              <Flex className="justify-between py-3 border-b border-gray-300">
                <HeadText content="Total" className="text-sky-950" />
                <HeadText content={`₹ ${68.0}`} className="text-sky-950" />
              </Flex>
              <Flex className="py-10">
                <Button
                  label="INTEGRATION"
                  className="bg-sky-950 text-white font-bold w-full rounded-full py-2"
                />
              </Flex>
            </div>
          )}
        </div>
      </Flex>
    </div>
  );
}
