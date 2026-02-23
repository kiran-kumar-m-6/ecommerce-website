import { useState } from "react";
import { Flex, HeadText, ParaText } from "@/components/atom";
import DropDown from "@/components/molecules/DropDown/DropDown";
import ResultInner from "@/components/organisms/ResultInner/ResultInner";
import { DropDownData } from "@/Data/DropDown/DropDownData";

export default function BluThirdPartySection() {
  const [values, setValues] = useState(1);

  return (
    <div className="p-6 md:p-16">
      <div className="bg-gradient-to-b from-[#0b145a] to-[#0a2a88] py-16">
        <Flex className="flex-col items-center gap-4">
          <HeadText
            content="SUBSCRIPTION COMPARISION CALCULATOR"
            className="text-white text-4xl md:text-5xl font-bold text-center"
          />
          <ParaText
            content="Calculate the price difference from standard vs subscription prices"
            className="text-white text-center md:p-2"
          />
          <div className="mt-8 grid lg:flex">
            <div className="grid gap-5">
              <DropDown data={DropDownData} />
              <div className="p-3">
                <ParaText
                  content={`${values}`}
                  className="text-white text-end px-2 font-bold"
                />
                <input
                  type="range"
                  min={1}
                  max={25}
                  value={values}
                  className="w-full h-5 outline-none opacity-1"
                  onChange={(e) => setValues(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="grid">
              <ResultInner pods={values} />
            </div>
          </div>
        </Flex>
        <div className="mt-4">
          <ParaText
            content="The estimated savings provided by this calculator tool are based on recommended retail price. 
                    Please note that actual savings may vary depending on retail point, individual usage patterns & flavour"
            className="text-white text-sm text-center md:p-2"
          />
        </div>
      </div>
    </div>
  );
}
