import { Button, HeadText, ParaText } from "@/components/atom";
import Link from "next/link";

type Props = {
  open: boolean;
  onClose?: () => void;
};

export default function EmptyCart() {
  return (
    <div>
      <div className="px-40">
        <div className="bg-sky-50 border-none rounded-2xl text-center py-4">
          <div>
            <HeadText
              content="Shopping Cart"
              className="text-5xl text-sky-950 py-2"
            />
            <HeadText
              content="Your cart is empty."
              className="text-5xl text-sky-950 py-2"
            />
          </div>
          <div>
            <ParaText
              content="Add products to your cart"
              className="py-10 font-semibold text-sky-950 text-2xl"
            />
          </div>
          <div className="pt-7">
            <Link href={`/restaurant/device/${"pulse3.0"}`}>
              <Button
                label="BUY HERE"
                className="border-2 font-semibold text-xl border-sky-950 rounded-full text-sky-950 px-6 py-2 hover:border-[#4381ac] hover:text-[#4381ac]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
