import { Input } from "@/components/atom";
import { useState } from "react";

type Props = {
  className?: string;
};

export default function ValueSlider({ className }: Props) {
  const [value, setValue] = useState(0);

  return (
    <Input
      type="range"
      min={1}
      max={25}
      value={value}
      className={`w-full h-5 outline-none opacity-1 ${className}`}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  );
}
