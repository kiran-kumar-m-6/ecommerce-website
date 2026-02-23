import React, { forwardRef } from "react";

// type PropVal = {
//   type: React.HTMLInputTypeAttribute;
//   name?: string;
//   id?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
//   className?: string;
//   value?: string | number;
//   min?: number | string;
//   max?: number | string;
//   step?: number;
//   aria_valuenow?: number;
//   aria_valuemin?: number;
//   aria_valuemax?: number;
//   onClick?: () => void;
//   checked?: boolean;
// };

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
