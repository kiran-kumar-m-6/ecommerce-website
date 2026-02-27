"use client";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Link from "next/link";
import type { AppDispatch } from "@/lib/store";
import { addUser } from "@/lib/features/todos/todosSlice";
import { useRouter } from "next/navigation";
import { Button, Flex, HeadText, Icon, Label, Input } from "@/components/atom";

type FormValues = {
  firstName: string;
  lastName: string;
  mobile: string;
  gmail: string;
  password: string;
  reEnterPassword: string;
};

export default function CafeSignUpPage() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      gmail: "",
      password: "",
      reEnterPassword: "",
      mobile: "",
    },
    mode: "onChange",
  });

  const router = useRouter();
  const onSubmit = (data: FormValues) => {
    if (data.password !== data.reEnterPassword) {
      alert("Passwords do not match");
      return;
    } else {
      alert("SignUp success");
    }

    dispatch(
      addUser({
        firstName: data.firstName,
        lastName: data.lastName,
        mobile: data.mobile,
        gmail: data.gmail,
        password: data.password,
      }),
    );
    router.replace("/cafe/login");
    reset();
  };

  return (
    <div className="w-full max-w-lg rounded-xl shadow-lg p-6 sm:p-8 bg-white">
      <Flex className="align-middle justify-center">
        <Icon
          src="/cagelogo.png"
          alt="Cafe Logo"
          width={80}
          height={80}
          className="object-scale-down"
        />
      </Flex>
      <HeadText
        content="Cafe SignUp"
        className="text-center m-0 py-2 text-lg"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex className="justify-center pb-3">
          <Flex className="flex-col items-center gap-3">
            <div className="grid md:flex justify-between flex-wrap gap-3">
              <div>
                <Label htmlFor="firstname" label="First Name" />
                <Input
                  type="text"
                  id="firstname"
                  placeholder="Enter Your First Name"
                  className="w-full h-[40px] rounded-md"
                  required
                  {...register("firstName", { required: true })}
                />
              </div>
              <div>
                <Label htmlFor="lastname" label="Last Name" />
                <Input
                  type="text"
                  id="lastname"
                  placeholder="Enter Your Last Name"
                  className="w-full h-[40px] rounded-md"
                  required
                  {...register("lastName", { required: true })}
                />
              </div>
            </div>

            <div className="grid md:flex justify-between flex-wrap gap-3">
              <div>
                <Label htmlFor="mobile" label="Mobile" />
                <Input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your Mobile Number"
                  className="w-full h-[40px] rounded-md"
                  required
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Mobile number must be exactly 10 digits",
                    },
                  })}
                />

                {errors.mobile?.message && (
                  <p className="text-red-500 text-xs">
                    {errors.mobile.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email" label="Email" />
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your username"
                  className="w-full h-[40px] rounded-md"
                  required
                  {...register("gmail", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.gmail && (
                  <p className="text-red-500 text-xs">
                    {errors.gmail.message}
                  </p>
                )}
              </div>
            </div>
            
            <div className="grid md:flex justify-between flex-wrap gap-3">
              <div>
                <Label htmlFor="password" label="Password" />
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full h-[40px] rounded-md"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs ">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="password" label="Re-Enter Password" />
                <Input
                  type="password"
                  id="reEnter-password"
                  placeholder="Re-Enter your password"
                  className="w-full h-[40px] rounded-md"
                  required
                  {...register("reEnterPassword", {
                    required: "Please confirm password",
                    validate: (value, formValues) =>
                      value === formValues.password || "Passwords do not match",
                  })}
                />
                {errors.reEnterPassword && (
                  <p className="text-red-500 text-xs ">
                    {errors.reEnterPassword.message}
                  </p>
                )}
              </div>
            </div>
          </Flex>
        </Flex>
        <Flex className="flex-col md:flex-row items-center justify-center gap-6 mt-6">
          <Button
            type="submit"
            label="SignUp"
            className="bg-[#ad4b09] w-[150px] text-white h-[45px] rounded-lg hover:bg-[#b35e25]"
          />

          <p className="text-gray-400 text-xs">-- or --</p>

          <Link
            href="/cafe/login"
            className="bg-[#d38c5e] w-[150px] h-[45px] rounded-lg hover:bg-[#b35e25] flex items-center justify-center"
          >
            SignIn
          </Link>
        </Flex>
      </form>
    </div>
  );
}
