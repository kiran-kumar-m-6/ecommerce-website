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
    <div className="relative h-full w-full max-w-3xl">
      <div ref={sliderRef} className="keen-slider overflow-hidden">
        {data.map((src, i) => (
          <div
            key={i}
            className="keen-slider__slide h-[50rem] w-[20rem] sm:h-80 md:h-96 lg:h-[34rem] xl:h-[50rem] xl:w-[50rem]"
          >
            <img
              src={src.image}
              alt={`Slide ${i + 1}`}
              className="h-full w-full m-0 object-cover"
            />
          </div>
        ))}
      </div>
      <div data-testid="Carousel-dots" className="flex justify-center">
        <CarouselDots
          count={slideCount}
          current={currentSlide}
          onSelect={(i) => slider.current?.moveToIdx(i)}
        />
      </div>
    </div>
  );
}
