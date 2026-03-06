"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { Flex, Icon } from "@/components/atom";
import { ProductParallaxTypes } from "@/Data/Type/ProductParallax/ProductParallaxTypes";
import { CarouselDots } from "./CarouselDots";
import { ParallaxContent } from "./ParallaxContent";

type Props = {
  data: ProductParallaxTypes[];
};

const variants: Variants = {
  first: (direction: number) => ({
    y: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
};

function isPointInsideRect(x: number, y: number, rect: DOMRect) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

export const ProductParallax = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const isAnimating = useRef(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const slides = data?.[0]?.ParallaxData ?? [];
  const lastIndex = slides.length - 1;
  const section = slides[activeIndex];

  const changeSlide = (direction: "up" | "down") => {
    if (isAnimating.current) return;

    if (direction === "down") {
      if (activeIndex === lastIndex) {
        return;
      }
      setDirection(1);
      setActiveIndex((prev) => prev + 1);
    } else {
      if (activeIndex === 0) {
        return;
      }
      setDirection(-1);
      setActiveIndex((prev) => prev - 1);
    }
    isAnimating.current = true;
  };
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollRef.current || Math.abs(e.deltaY) < 30) return;
      const parallax = scrollRef.current.getBoundingClientRect();
      if (!isPointInsideRect(e.clientX, e.clientY, parallax)) return;
      e.preventDefault();
      e.deltaY > 0 ? changeSlide("down") : changeSlide("up");
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!scrollRef.current) return;
      const touch = e.touches[0];
      const parallax = scrollRef.current.getBoundingClientRect();
      console.log(parallax);
      if (!isPointInsideRect(touch.clientX, touch.clientY, parallax)) return;
      e.preventDefault();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeIndex]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (isAnimating.current) return;
    if (info.offset.y <= -50) changeSlide("down");
    else if (info.offset.y >= 50) changeSlide("up");
  };

  return (
    <Flex
      className="box-border min-w-0 items-center justify-center bg-white py-2 md:py-3.5"
      data-testid="product-component"
    >
      <div className="md:mr-5">
        <Icon
          src={data[0]?.productImage ?? ""}
          alt={data[0]?.productAlt ?? "device"}
          height={573}
          width={252}
          className="h-[573px] translate-x-[-32%] transform object-cover md:translate-x-0"
        />
      </div>

      <div
        className="box-border m-0 min-w-0 touch-none translate-x-[-32%] transform items-center md:translate-x-0"
        ref={scrollRef}
      >
        <div
          className="relative w-[200px] items-center cursor-grab md:left-0 md:top-0 md:w-[408px]"
          data-testid="product-parallax"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={section?.id}
              variants={variants}
              custom={direction}
              initial="first"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.75,
              }}
              drag="y"
              dragConstraints={{ top: -50, bottom: 50 }}
              dragElastic={0.25}
              dragMomentum={false}
              onDragEnd={(e, info) => {
                handleDragEnd(e, info);
              }}
              style={{ touchAction: "none" }}
              onAnimationComplete={() => {
                isAnimating.current = false;
              }}
            >
              <ParallaxContent section={section ?? {}} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <CarouselDots data={slides ?? {}} activeIndex={activeIndex} />
    </Flex>
  );
};
