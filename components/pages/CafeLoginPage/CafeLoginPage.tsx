"use client";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import type { RootState } from "@/lib/store";
import Link from "next/link";
import { setAuthCookie } from "./actions";
import { Button, Flex, HeadText, Icon, Label, Input } from "@/components/atom";

type FormValues = {
  gmail: string;
  password: string;
};

export default function CafeLoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      gmail: "",
      password: "",
    },
    mode: "all",
  });
  const router = useRouter();
  const users = useSelector(
    (state: RootState) => state.userDetails.userDetails,
  );

  const onSubmit = async (data: FormValues) => {
    const user = users.find(
      (u) => u.gmail === data.gmail && u.password === data.password,
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    try {
      await setAuthCookie(user.gmail);
      router.replace("/cafe/home");
      reset();
    } catch (err) {
      console.error("Failed to set cookie", err);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <Flex className="flex-col rounded-xl shadow-lg p-8 bg-white">
      <Flex className="align-middle justify-center">
        <Icon src="/cagelogo.png" alt="Cafe Logo" width={100} height={100} />
      </Flex>
      <HeadText
        content="Cafe SignIn"
        className="text-center m-0 py-2 text-lg"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex className="justify-center align-middle pb-3">
          <Flex className="flex-col items-center gap-3">
            <Flex className="flex-col gap-1">
              <Label htmlFor="username" label="Username" />
              <Input
                type="email"
                id="email"
                placeholder="Enter your username"
                className="w-full sm:w-[400px] h-[40px] rounded-md"
                required
                {...register("gmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                onFocus={() => trigger("gmail")}
              />
              {errors.gmail && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.gmail.message}
                </p>
              )}
            </Flex>
            <Flex className="flex-col gap-1">
              <Label htmlFor="password" label="Password" />
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full sm:w-[400px] h-[40px] rounded-md"
                {...register("password", {
                  required: "Password Required",
                  minLength: {
                    value: 6,
                    message: "Password must contain at least 6 characters",
                  },
                })}
                onFocus={() => trigger("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex className="justify-between align-middle gap-3">
          <Button
            type="submit"
            label="SignIn"
            className="bg-[#ad4b09] w-[150px] h-[45px] text-white rounded-lg hover:bg-[#b35e25]"
          />
          <p className="text-gray-400 grid items-center">-- or --</p>
          <Link href={"/cafe/signup"}>
            <Button
              label="SignUp"
              className="bg-[#d38c5e] text-white w-[150px] h-[45px] rounded-lg hover:bg-[#ff6600]"
            />
          </Link>
        </Flex>
      </form>
    </Flex>
  );
}