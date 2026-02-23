import { Button } from "../Button/Button";

type Props = {
  active?: boolean;
  onClick: () => void;
  activeColor?: string;
  notActive?: string;
  className?: string;
};

export function CarouselDot({
  active,
  onClick,
  activeColor = "bg-blue-500",
  notActive = "bg-gray-300",
  className,
}: Props) {
  return (
    <Button
      onClick={onClick}
      className={`w-3 h-3 rounded-full ${active ? activeColor : notActive} ${className}`}
    />
  );
}
