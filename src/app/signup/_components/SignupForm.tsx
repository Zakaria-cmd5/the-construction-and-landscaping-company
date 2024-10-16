"use client";

import ErrorMessage from "@/app/login/_components/ErrorMessage";
import ErrorModel from "@/components/ErrorModel";
import Spinner from "@/components/Spinner";
import delay from "delay";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z, { ZodError } from "zod";

interface FormShape {
  email: string;
  password: string;
  reEnterPassword: string;
  phoneNumber: number;
  userName: string;
  city: string;
  country: string;
}

const SignupFormSchema = z.object({
  email: z
    .string()
    .min(11, "your email are invalid or too small")
    .max(255, "your email are invalid or too long"),
  password: z
    .string()
    .min(8, "your password are invalid or too small")
    .max(20, "your password are invalid or too long"),
  reEnterPassword: z
    .string()
    .min(8, "your password are invalid or too small")
    .max(20, "your password are invalid or too long"),
  phoneNumber: z
    .string()
    .min(10, "your phone number are invalid or too small")
    .max(255, "your phone number are invalid or too long"),
  userName: z
    .string()
    .min(2, "your name are invalid or too small")
    .max(20, "your name are invalid or too long"),
  city: z
    .string()
    .min(2, "your city are invalid or too small")
    .max(20, "your city are invalid or too small"),
  country: z
    .string()
    .min(2, "your country are invalid or too small")
    .max(20, "your country are invalid or too long"),
});

const SignupForm = () => {
  const { register, handleSubmit } = useForm<FormShape>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [networkError, setNetworkError] = useState("");
  const [isClosedModel, setIsClosedModel] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({
    email: null,
    password: null,
    reEnterPassword: null,
    phoneNumber: null,
    userName: null,
    city: null,
    country: null,
  });

  const onSubmit = async (data: FormShape) => {
    setNetworkError("");
    try {
      setIsLoading(true);
      setErrors({
        email: null,
        password: null,
        reEnterPassword: null,
        phoneNumber: null,
        userName: null,
        city: null,
        country: null,
      });
      await SignupFormSchema.parseAsync(data);
      await delay(3000);
      router.push("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error instanceof ZodError) {
        setIsLoading(false);
        const newErrors: { [key: string]: string | null } = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      } else {
        setIsLoading(false);
        setNetworkError(error.message);
        setIsClosedModel(true);
      }
    }
  };

  return (
    <div>
      <form
        className="flex flex-col space-y-3 mx-auto w-full max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="font-medium text-[#121C17] leading-[24.2px]">
          EMAIL ADDRESS
        </label>
        <input
          className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          type="email"
          placeholder="Example@gmail.com"
          {...register("email")}
        />

        <label className="font-medium text-[#121C17] leading-[24.2px]">
          PHONE NUMBER
        </label>
        <input
          className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          type="number"
          placeholder="**********"
          {...register("phoneNumber")}
        />

        <label className="font-medium text-[#121C17] leading-[24.2px]">
          USER NAME
        </label>
        <input
          className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          type="text"
          placeholder="@User-Name"
          {...register("userName")}
        />

        <label className="font-medium text-[#121C17] leading-[24.2px]">
          PASSWORD
        </label>
        <input
          className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          type="password"
          placeholder="**********"
          {...register("password")}
        />

        <label className="font-medium text-[#121C17] leading-[24.2px]">
          RE-ENTER PASSWORD
        </label>
        <input
          className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          type="password"
          placeholder="**********"
          {...register("reEnterPassword")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label className="font-medium text-[#121C17] leading-[24.2px]">
              COUNTRY
            </label>
            <input
              className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                     focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                     shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                     hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
              type="text"
              {...register("country")}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-[#121C17] leading-[24.2px]">
              CITY
            </label>
            <input
              className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                     focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                     shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                     hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
              type="text"
              {...register("city")}
            />
          </div>
        </div>

        <button
          disabled={isLoading}
          className="bg-[#2BE784] text-[#121C17] font-medium rounded-lg w-full max-w-[204px] h-[49px] mx-auto flex justify-center items-center"
        >
          {isLoading ? <Spinner /> : "SIGNUP"}
        </button>

        <div className="flex items-center justify-center w-full mt-2">
          <span className="uppercase font-medium text-[15px] leading-[18.15px]">
            have an account?
          </span>
          <Link
            href="/login"
            className="text-[#0E7E83] text-[15px] font-medium leading-[18.15px] ml-5"
          >
            LOGIN
          </Link>
        </div>
      </form>

      {networkError && (
        <ErrorModel
          isClosedModel={isClosedModel}
          setIsClosedModel={() => setIsClosedModel(false)}
        />
      )}

      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      {errors.reEnterPassword && (
        <ErrorMessage>{errors.reEnterPassword}</ErrorMessage>
      )}
      {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber}</ErrorMessage>}
      {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
      {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
      {errors.userName && <ErrorMessage>{errors.userName}</ErrorMessage>}
    </div>
  );
};

export default SignupForm;
