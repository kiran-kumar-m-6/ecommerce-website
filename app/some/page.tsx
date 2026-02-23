"use client";

import Input from "@/components/atom/Input/Input";
import Label from "@/components/atom/Label/Label";
import { useForm } from "react-hook-form";

type Props = {
  name: string;
};

export default function SomeCode() {
  const { register, watch } = useForm<Props>({
    defaultValues: {
      name: " ",
    },
  });

  const nameValue = watch("name");

  console.log(nameValue);

  return (
    <div>
      <Label label="Name" className="text-sky-950 text-xl" htmlFor="name" />
      <Input
        {...register("name", { minLength: 2 })}
        type="text"
        placeholder="Enter Your Name"
      />
    </div>
  );
}
