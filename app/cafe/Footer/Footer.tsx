"use client";
import { Flex, Icon } from "@/components/atom";
import { useEffect, useState } from "react";

type Props = {
  visa: string;
  master: string;
  paypal: string;
  applePay: string;
};

type FooterProps = {
  data: Props[];
};

export default function Footer({ data }: FooterProps) {
  const [isMac, setIsMac] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMac(/mac/i.test(navigator.userAgent));
  }, []);

  if (isMac === null) return null;

  return (
    <footer className="bg-blue-950">
      <Flex className="justify-center py-3 gap-10">
        {data.map((footer, index) => (
          <div key={index} className="flex gap-10">
            <Icon src={footer.visa} alt="visa card" width={50} height={50} />
            <Icon
              src={footer.master}
              alt="master card"
              width={50}
              height={50}
            />
            <Icon src={footer.paypal} alt="paypal" width={50} height={50} />
            {isMac && (
              <Icon
                src={footer.applePay}
                alt="applepay"
                width={50}
                height={50}
              />
            )}
          </div>
        ))}
      </Flex>
    </footer>
  );
}
