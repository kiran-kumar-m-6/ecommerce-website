import { Flex, CarouselDot } from "@/components/atom";

type DotProps = {
  count: number;
  current: number;
  onSelect: (index: number) => void;
};

export default function CarouselDots({ count, current, onSelect }: DotProps) {
  if (count === 1) return null;
  return (
    <Flex className="gap-2 mt-3">
      {Array.from({ length: count }).map((_, i) => (
        <CarouselDot
          key={i}
          active={i === current}
          onClick={() => onSelect(i)}
        />
      ))}
    </Flex>
  );
}
