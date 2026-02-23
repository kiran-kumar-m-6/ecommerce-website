import { ReactNode } from "react";

type FlexProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Flex({ children, className }: FlexProps) {
  return <div className={`flex m-0 p-0 ${className} `}>{children}</div>;
}
