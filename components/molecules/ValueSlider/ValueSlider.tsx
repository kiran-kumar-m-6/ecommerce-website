import { Input } from "@/components/atom";
import { useRef, useState } from "react";

type Props = {
  className?: string;
};

export default function ValueSlider({ className }: Props) {
  const [value, setValue] = useState(0);
  const values = useRef<HTMLInputElement | null>(null);

  return (
    <Input
      type="range"
      min={1}
      max={25}
      value={value}
      aria_valuenow={1}
      aria_valuemin={1}
      aria_valuemax={25}
      className={`w-full h-5 outline-none opacity-1 ${className}`}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  );
}
