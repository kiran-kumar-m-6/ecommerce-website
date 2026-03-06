import { ReactNode, HTMLAttributes } from "react";

type FlexProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export function Flex({ children, className, ...props }: FlexProps) {
  return (
    <div className={`flex m-0 p-0 ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
}
