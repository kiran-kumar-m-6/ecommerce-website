import { Button } from "@/components/atom";
import {
  ParallaxTypes,
  ProductParallaxTypes,
} from "@/Data/Type/ProductParallax/ProductParallaxTypes";
import Link from "next/link";

type Props = {
  section?: ParallaxTypes;
};

export const ParallaxContent = ({ section }: Props) => {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl md:text-3xl text-blue-950 font-bold mb-4 uppercase">
        {section?.heading ?? "Heading"}
      </h1>
      <p className="sm:text-sm md:text-lg text-[#696969] font-semibold mb-6 text-left">
        {section?.subtitle ?? "Subtitle"}
      </p>
      {section?.ctaLabel && (
        <Link
          href={section?.ctaLink ?? "#"}
          className="py-2 px-4 text-blue-950 capitalize font-bold bg-[#FBBB29] hover:bg-[#009CEB] hover:text-white cursor-pointer rounded-[4px]"
        >
          {section?.ctaLabel ?? "BUY"}
        </Link>
      )}
    </div>
  );
};
