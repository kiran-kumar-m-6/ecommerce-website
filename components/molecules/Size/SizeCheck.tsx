import { Button, Flex } from "@/components/atom";
import { useBreakPoint } from "@/hook/useBreakPoint";
import { useState } from "react";

export default function SizeCheck() {
  const screen = useBreakPoint();
  const [check, setCheck] = useState(false);
  return (
    <div className="grid justify-center ">
      {check && (
        <Flex className="text-black bg-white display text-center justify-center text-xl font-bold m-3 rounded-md p-3">
          <p>{screen}</p>
        </Flex>
      )}
      <Button
        label="Check Size"
        onClick={() => setCheck((prev) => !prev)}
        className="bg-[#e52826] text-white hover:bg-[#c91f1d] w-[150px] h-[45px] mt-5 rounded-lg"
      />
    </div>
  );
}
