import { useEffect, useState } from "react";

export type BreakPointValue = "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export function useBreakPoint(): BreakPointValue {
  const [breakPoint, setBreakPoint] = useState<BreakPointValue>("xl");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const getSize = () => {
      const width = window.innerWidth;
      const bp: BreakPointValue =
        width < 480
          ? "sm"
          : width < 720
            ? "md"
            : width < 1024
              ? "lg"
              : width < 2520
                ? "xl"
                : width < 4000
                  ? "xxl"
                  : "xxxl";
      setBreakPoint(bp);
    };
    getSize();
    window.addEventListener("resize", getSize);
    return () => window.removeEventListener("resize", getSize);
  }, []);
  return breakPoint;
}
