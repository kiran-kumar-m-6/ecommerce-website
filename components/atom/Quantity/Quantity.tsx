"use client";
import { Button } from "../Button/Button";
import { ParaText } from "../ParaText/ParaText";

type Props = {
  className?: string;
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
};

export function Quantity({ className, value, onChange, disabled }: Props) {
  return (
    <div
      className={`flex border border-blue-950 w-[100px] items-center justify-center h-[40px] ${className}`}
    >
      <Button
        label="-"
        onClick={() => onChange(value > 0 ? value - 1 : 0)}
        className="px-4 text-2xl"
      />
      <ParaText content={`${value}`} className="text-xl" />
      <Button
        label="+"
        onClick={() => onChange(value + 1)}
        className={disabled ? `text-gray-500 px-4 text-2xl` : `px-4 text-2xl`}
        disabled={disabled}
      />
    </div>
  );
}
