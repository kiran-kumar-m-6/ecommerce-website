"use client";
import { useState } from "react";

type AccordionProps = {
  id: number;
  question: string;
  answer: string;
};

type Props = {
  data: AccordionProps[];
};

export default function Accordion({ data }: Props) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-6 md:p-16">
      <div className="w-full max-w-5xl mx-auto border-y border-gray-300">
        {data.map((item) => (
          <div key={item.id} className="border-b border-gray-300">
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex justify-between items-center py-5 text-left text-blue-950 uppercase"
            >
              <h1 className="font-extrabold text-2xl">{item.question}</h1>

              <span
                className={`text-3xl transition-transform duration-300`}
              >
                {openId === item.id ? "-" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openId === item.id
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="pb-6 text-blue-950 font-semibold text-lg">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
