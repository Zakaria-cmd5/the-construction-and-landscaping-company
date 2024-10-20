"use client";

import ErrorModel from "@/components/ErrorModel";
import Spinner from "@/components/Spinner";
import delay from "delay";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z, { ZodError } from "zod";
import ErrorMessage from "./ErrorMessage";

interface FormShape {
  email: string;
  password: string;
}

const LoginFormSchema = z.object({
  email: z
    .string()
    .min(11, "your email are invalid or too small")
    .max(255, "your email are invalid or too long"),
  password: z
    .string()
    .min(8, "your password are invalid or too small")
    .max(20, "your password are invalid or too long"),
});

interface Props {
  darkMode: boolean;
}

const LoginForm = ({ darkMode }: Props) => {
  const { register, handleSubmit } = useForm<FormShape>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isClosedModel, setIsClosedModel] = useState<boolean>(false);
  const [networkError, setNetworkError] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({
    userName: null,
    password: null,
  });

  const onSubmit = async (data: FormShape) => {
    setNetworkError("");
    try {
      setIsLoading(true);
      setErrors({
        email: null,
        password: null,
      });
      await LoginFormSchema.parseAsync(data);
      await delay(3000);
      router.push("/");
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
        setIsClosedModel(true);
        setNetworkError(error.message);
      }
    }
  };

  return (
    <div>
      <form
        className="flex flex-col space-y-3 mt-12 sm:space-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          className={`font-medium text-[#121C17] leading-[24.2px] ${
            darkMode && "text-white"
          }`}
        >
          EMAIL ADDRESS
        </label>
        <input
          className="rounded-lg w-[478px] max-w-full h-[46px] pl-10 bg-white border border-[#EEF9F3] 
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          type="email"
          placeholder="Example@gmail.com"
          {...register("email")}
        />
        <label
          className={`font-medium text-[#121C17] leading-[24.2px] ${
            darkMode && "text-white"
          }`}
        >
          PASSWORD
        </label>
        <input
          className="rounded-lg w-[478px] max-w-full h-[46px] pl-10 bg-white border border-[#EEF9F3] 
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          type="password"
          placeholder="**********"
          {...register("password")}
        />
        <div className="flex items-center w-[478px] max-w-full mt-2">
          <span
            className={`uppercase font-medium text-[15px] leading-[18.15px] ${
              darkMode && "text-white"
            }`}
          >
            don’t have an account?
          </span>
          <Link
            href="/signup"
            className="text-[#0E7E83] text-[15px] font-medium leading-[18.15px] ml-5"
          >
            SIGN UP
          </Link>
        </div>
        <div
          className={`flex items-center w-[478px] max-w-full mt-2 ${
            darkMode && "text-white"
          }`}
        >
          <span className="uppercase font-medium text-[15px] leading-[18.15px]">
            forget password?
          </span>
          <Link
            href="/change-password"
            className="text-[#0E7E83] text-[15px] font-medium leading-[18.15px] ml-5"
          >
            CHANGE PASSWORD
          </Link>
        </div>
        <button
          disabled={isLoading}
          className="bg-[#2BE784] text-[#121C17] font-medium rounded-lg w-[204px] max-w-full h-[49px] mx-auto flex justify-center items-center"
        >
          {isLoading ? <Spinner /> : "LOGIN"}
        </button>
      </form>
      {networkError && (
        <ErrorModel
          isClosedModel={isClosedModel}
          setIsClosedModel={() => setIsClosedModel(false)}
        />
      )}
      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
    </div>
  );
};

export default LoginForm;
