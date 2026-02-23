import { useState } from "react";
import { Button, Flex, ParaText } from "@/components/atom";

type Options = {
  label: string;
  value: string;
  image: string;
};

type Props = {
  data: Options[];
};

export default function DropDown({ data }: Props) {
  const [selected, setSelected] = useState<Options>(data[0]);
  const [open, setOpen] = useState(false);

  return (
    <Flex className="flex-col px-4">
      <ParaText
        content="WHICH PRODUCT DO YOU USE CURRENTLY?"
        className="text-white text-sm font-bold mb-3"
      />
      <div className="relative md:w-[420px]">
        <Button
          className="w-full bg-white px-4 py-3 rounded-md flex font-medium shadow-md"
          onClick={() => setOpen(!open)}
          label={selected.label}
        />
        {open && (
          <ul className="absolute mt-2 w-full bg-white rounded-md shadow-lg overflow-hidden z-10">
            {data.map((opt, index) => (
              <li
                key={opt.value ?? index}
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
                className=" p-3 hover:bg-blue-100 cursor-pointer"
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Flex className="mt-10 transition-all duration-300 align-middle justify-center">
        <img src={selected.image} alt={selected.label} className="w-[300px]" />
      </Flex>
    </Flex>
  );
}
