import { useEffect, useRef } from "react";

type UseOutsideClickProps = {
  onOutsideClick: () => void;
};

export const useOutsideClick = ({ onOutsideClick }: UseOutsideClickProps) => {
  const reference = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        !reference.current ||
        reference.current.contains(event.target as Node)
      ) {
        return;
      }
      onOutsideClick();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onOutsideClick]);

  return reference;
};
