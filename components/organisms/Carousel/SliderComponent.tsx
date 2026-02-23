import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button, CarouselArrows, Flex } from "@/components/atom";
import CarouselDots from "@/components/molecules/CarouselDots/CarouselDots";

type Slide = {
  image: string;
  head: string;
  foot: string;
  btnText?: string;
};
type Props = {
  data: Slide[];
};

export default function Carousel({ data }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });
  const slideCount = data.length;

  return (
    <div className="relative h-full w-full max-w-8xl mx-auto">
      <div ref={sliderRef} className="keen-slider  overflow-hidden">
        {data.map((src, i) => (
          <div
            key={i}
            className="keen-slider__slide h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]"
          >
            <img
              src={src.image}
              alt={`Slide ${i + 1}`}
              className="w-full h-full m-0 object-cover"
            />
            <div className="absolute inset-0 ml-8 flex flex-col justify-center items-start px-8  text-white">
              <h2
                className="text-2xl md:text-4xl font-bold"
                role="heading"
                data-testid="heading"
              >
                {src.head}
              </h2>

              <p
                className="mt-2 max-w-md"
                role="paragraph"
                data-testid="paragraph"
              >
                {src.foot}
              </p>
              <div data-testid="carousel-button" role="button">
                {src.btnText && (
                  <Button
                    label={src.btnText}
                    className="bg-[#66ccff] border-0 mt-4 px-6 py-2 text-black font-semibold rounded w-[230px] h-[45px]  hover:bg-yellow-500"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div data-testid="Carousel-Arrows">
        <CarouselArrows
          direction="left"
          onClick={() => slider.current?.prev()}
        />
        <CarouselArrows
          direction="right"
          onClick={() => slider.current?.next()}
        />
      </div>
      <Flex data-testid="Carousel-dots" className="justify-center">
        <CarouselDots
          count={slideCount}
          current={currentSlide}
          onSelect={(i) => slider.current?.moveToIdx(i)}
        />
      </Flex>
    </div>
  );
}
