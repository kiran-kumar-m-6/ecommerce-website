import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CarouselDots from "@/components/molecules/CarouselDots/CarouselDots";

type Slide = {
  image: string;
};

type Props = {
  data: Slide[];
};

export default function ImageSlider({ data }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });
  const slideCount = data.length;

  return (
    <div
      className="
        relative 
        w-full 
        max-w-[92vw] 
        sm:max-w-[88vw] 
        md:max-w-[640px] 
        lg:max-w-3xl
        xl:max-w-4xl
        mx-auto 
        px-0 
        sm:px-4 
        overflow-x-hidden
      "
    >
      <div
        ref={sliderRef}
        className="keen-slider w-full overflow-hidden rounded-xl"
      >
        {data.map((src, i) => (
          <div
            key={i}
            className="keen-slider__slide w-full aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/9] flex justify-center"
          >
            <img
              src={src.image}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-center">
        <CarouselDots
          count={slideCount}
          current={currentSlide}
          onSelect={(i) => slider.current?.moveToIdx(i)}
        />
      </div>
    </div>
  );
}
