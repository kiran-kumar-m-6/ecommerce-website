import { motion } from "framer-motion";
import { ParallaxTypes } from "@/Data/Type/ProductParallax/ProductParallaxTypes";

type Props = {
  data?: ParallaxTypes[];
  activeIndex: number;
};

export const CarouselDots = ({ data, activeIndex }: Props) => {
  return (
    <div className="mx-3 h-[69px] md:mx-[48px]">
      <div className="m-0 min-w-0 grid gap-2">
        {(data ?? []).map((_, index) => (
          <div
            key={index}
            className={`w-[5px] rounded-[10px] bg-[#D9D9D9]
              ${activeIndex === index ? "h-8" : "h-[5px]"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
