import { Button } from "../Button/Button";

type Props = {
  direction: "left" | "right";
  onClick: () => void;
  arrowleft?: string;
  arrowsright?: string;
};

export function CarouselArrows({
  direction,
  onClick,
  arrowleft = "≪",
  arrowsright = "≫",
}: Props) {
  return (
    <Button
      label={direction === "left" ? arrowleft : arrowsright}
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 text-[#808080] px-2 py-5 text-2xl 
          ${direction === "left" ? "left-2" : "right-2"}`}
    />
  );
}
