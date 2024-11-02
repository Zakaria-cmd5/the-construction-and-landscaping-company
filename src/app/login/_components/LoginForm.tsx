"use client";

import { loginAction } from "@/actions/loginAction";
import FormLabel from "@/app/signup/_components/FormLabel";
import ErrorMessage from "@/components/ErrorMessage";
import Spinner from "@/components/Spinner";
import { useDarkMode } from "@/context/DarkModeToggleProvider";
import useFcmToken from "@/hooks/useFcmToken";
import { sendNotification } from "@/utils/notificationService";
import Link from "next/link";
import { useFormState } from "react-dom";

const inputStyle = `rounded-lg w-[478px] max-w-full h-[46px] pl-10 bg-white border border-[#EEF9F3] focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-30 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]`;

const LoginForm = () => {
  const { token } = useFcmToken();

  const handleTestNotification = async () => {
    try {
      const data = await sendNotification(
        token,
        "Congrats!",
        "You Have Login Successfully",
        "/"
      );
      console.log("Notification sent:", data);
    } catch (error) {
      console.error("Failed to send test notification:", error);
    }
  };

  const initState = { errors: {}, message: "" };
  const [formState, dispatch, pending] = useFormState(loginAction, initState);

  const { darkMode } = useDarkMode();

  return (
    <form
      action={dispatch}
      className="flex flex-col space-y-3 mt-12 sm:space-y-2"
    >
      <FormLabel>EMAIL ADDRESS</FormLabel>
      <input
        className={inputStyle}
        type="email"
        placeholder="Example@gmail.com"
        name="email"
      />
      <ErrorMessage>{formState.errors?.email?.join(", ")}</ErrorMessage>
      <FormLabel>PASSWORD</FormLabel>
      <input
        className={inputStyle}
        type="password"
        placeholder="**********"
        name="password"
      />
      <ErrorMessage>{formState.errors?.password?.join(", ")}</ErrorMessage>
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
        onClick={handleTestNotification}
        className="bg-[#2BE784] text-[#121C17] font-medium rounded-lg w-[204px] max-w-full h-[49px] mx-auto flex justify-center items-center"
      >
        {pending ? <Spinner /> : "LOGIN"}
      </button>
    </form>
  );
};

export default LoginForm;
