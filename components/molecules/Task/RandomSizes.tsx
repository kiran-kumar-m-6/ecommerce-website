import { useEffect, useRef, useState } from "react";

export default function RandomSizes() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [rWidth, setRWidth] = useState(0);
  const [rHeight, setRHeight] = useState(0);

  const boxRef = useRef<HTMLDivElement | null>(null);
  console.log(boxRef);
  console.log("Current : ", boxRef.current?.contains);

  useEffect(() => {
    const randomWidth = Math.floor(Math.random() * 300) + 1;
    const randomHeight = Math.floor(Math.random() * 300) + 1;
    setWidth(randomWidth);
    setHeight(randomHeight);
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      const style = getComputedStyle(boxRef.current);
      setRHeight(parseInt(style.height));
      setRWidth(parseInt(style.width));
    }
  }, [width, height]);

  return (
    <div className="flex justify-center items-center h-screen gap-7">
      <div
        className="border border-black text-center"
        style={{ width: `${width}px`, height: `${height}px` }}
        ref={boxRef}
      >
        {" "}
      </div>

      <div
        className="border border-black text-center"
        style={{ width: `${rWidth}px`, height: `${rHeight}px` }}
      >
        {" "}
      </div>
    </div>
  );
}
