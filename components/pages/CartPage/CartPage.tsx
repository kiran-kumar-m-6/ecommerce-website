import { useContext } from "react";
import { Button, Flex, HeadText, Icon, ParaText } from "@/components/atom";
import { CartContext } from "@/components/organisms/Context/Context";
import { useOutsideClick } from "@/hook/useOutSideClick";

type Props = {
  open?: boolean;
  onClose: () => void;
};

export default function CartPage({ open, onClose }: Props) {
  const cartItem = useContext(CartContext);
  const cart = cartItem?.cart ?? [];

  const cartPage = useOutsideClick({
    onOutsideClick: () => {
      if (open) onClose();
    },
  });
  if (!open) return null;

  return (
    <div
      className="fixed h-screen w-full transform bg-white px-4 py-3 transition md:w-[406px] lg:w-[500px] overflow-auto right-0 top-0 opacity-100 duration-1000 ease-in-out z-50"
      ref={cartPage}
    >
      <Flex className="justify-between items-center p-7 border-b border-b-gray-300">
        <HeadText
          content="CART"
          className="text-blue-950 font-extrabold text-3xl"
        />
        <Button label="✕" onClick={onClose} />
      </Flex>
      {cart.length > 0 && (
        <div className="p-5">
          <Flex className="bg-gray-100 rounded-xl">
            <ParaText
              content="Free delivery for all vape subscription orders and non-subscription orders over £25"
              className="text-blue-900 font-bold p-5"
            />
          </Flex>
        </div>
      )}

      <div className="p-4">
        {cart.length === 0 ? (
          <div className="grid justify-center items-center p-40 md:p-0">
            <HeadText
              content="YOUR BASKET IS EMPTY"
              className="text-sky-700 text-4xl text-center font-extrabold"
            />
            <ParaText
              content={`YOUR SHOPPING BASKET`}
              className="text-blue-950 text-center text-5xl font-extrabold"
            />
            <ParaText
              content="Can't find your product or need help browsing the website? Contact customer support."
              className="text-blue-950 text-center mt-4  "
            />
          </div>
        ) : (
          cart.map((product, index) => (
            <Flex
              key={product.id ?? index}
              className="rounded-lg border-2 p-4 mb-3"
            >
              <Icon
                src={product.image ?? ""}
                alt={product.name ?? ""}
                height={96}
                width={96}
              />
              <div className="grid ml-3 w-full">
                <Flex className="justify-between items-center">
                  <HeadText
                    content={product.name ?? ""}
                    className="text-blue-950 text-xl font-extrabold"
                  />
                  <HeadText
                    content={`₹${product.price ?? ""}`}
                    className="text-blue-950 text-lg font-extrabold"
                  />
                </Flex>
                <ParaText
                  content={product.description}
                  className="text-blue-950 font-bold"
                />
              </div>
            </Flex>
          ))
        )}
      </div>
    </div>
  );
}
