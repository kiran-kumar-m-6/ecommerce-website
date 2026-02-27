import React, { forwardRef } from "react";

type PropVal = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, PropVal>(
  ({ type = "text", className, onClick, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`border border-gray-300 text-black focus:outline-none p-4 m-0 ${className ?? ""}`}
        onClick={onClick}
        {...rest}
      />
    );
  },
);

Input.displayName = "Input";
