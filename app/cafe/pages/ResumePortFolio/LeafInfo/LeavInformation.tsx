"use client";
import { useForm } from "react-hook-form";
import { Input, Label } from "@/components/atom";

type FormValues = {
  name: string;
  gmail: string;
  subject?: string;
  message: string;
};

export default function LeavInformation() {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      name: "",
      gmail: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data", data);
    reset();
  };
  return (
    <div className="pt-[70px]">
      <h2 className="text-[#2B2B2B] text-[32px] font-bold pb-[50px] text-center lg:text-left dark:text-white">
        Leav Us Your Info
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white p-[25px] dark:bg-gray-800 max-w-[570px] lg:w-[570px]">
          <div>
            <Label
              label="Your Full Name ( Required )"
              className="text-[#767676] dark:text-white"
              htmlFor="name"
            />
            <Input
              type="text"
              id="name"
              className="h-[50px] w-full bg-[#F0F0F6] "
              {...register("name", { required: true })}
            />
          </div>

          <div className="pt-[25px]">
            <Label
              label="Your Email ( Required )"
              htmlFor="gmail"
              className="text-[#767676] dark:text-white"
            />
            <Input
              type="email"
              id="gmail"
              className="h-[50px] w-full bg-[#F0F0F6] "
              {...register("gmail", { required: true })}
            />
          </div>
          <div className="pt-[25px]">
            <Label
              label="Subject"
              htmlFor="subject"
              className="text-[#767676] dark:text-white"
            />
            <Input
              type="text"
              id="subject"
              className="h-[50px] w-full bg-[#F0F0F6] "
              {...register("subject")}
            />
          </div>

          <div className="pt-[25px]">
            <Label
              label="Your Message"
              htmlFor="message"
              className="text-[#767676] dark:text-white"
            />
            <textarea
              id="message"
              rows={6}
              cols={50}
              className="w-full  h-[210px] bg-[#F0F0F6] px-2 py-0.5 "
              {...register("message", { required: false })}
            />
          </div>
          <div className="pt-[25px]">
            <button
              type="submit"
              className="hover:text-white text-sm h-[35px] w-[159px] font-bold text-[#2B2B2B] py-[9px] pl-[25px] pr-[24px] bg-[#FFB400] dark:text-white"
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
