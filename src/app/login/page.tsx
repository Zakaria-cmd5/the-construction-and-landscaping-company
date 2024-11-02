"use client";

import { useDarkMode } from "@/context/DarkModeToggleProvider";
import Image from "next/image";
import loginImage from "../../../public/loginPageImages/Rectangle 11.png";
import logo from "../../../public/sharedImages/logo.png";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`lg:grid lg:grid-cols-2 md:flex md:flex-col sm:flex sm:flex-col mb-3`}
    >
      <div
        className={`bg-[#EEF9F3] flex flex-col items-center justify-center p-4 ${
          darkMode && "bg-neutral-900"
        }`}
      >
        <div className="flex flex-col justify-center mt-16 items-center">
          <h1
            className={`text-[#121C17] font-bold text-[96px] leading-[115.2px] md:text-[72px] md:leading-[86.4px] sm:text-[48px] sm:leading-[57.6px] text-center ${
              darkMode && "text-white"
            }`}
          >
            WELCOME
          </h1>
          <p
            className={`text-[#121C17] font-bold text-[16px] leading-[19.2px] lg:text-[48px] lg:leading-[57.6px] md:text-[36px] md:leading-[43.2px] sm:text-[24px] sm:leading-[28.8px] text-center ${
              darkMode && "text-white"
            }`}
          >
            REINVENT YOUR SPACE WITH US
          </p>
          <Image
            src={logo}
            alt="Logo"
            width={143}
            height={118}
            className="mt-6"
          />
        </div>
        <LoginForm />
      </div>

      <div className="hidden lg:block relative h-full">
        <Image
          src={loginImage}
          alt="Login Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0"
        />
      </div>
    </div>
  );
};

export default LoginPage;
