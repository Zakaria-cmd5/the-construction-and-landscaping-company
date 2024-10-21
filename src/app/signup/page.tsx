"use client";

import Image from "next/image";
import { useState } from "react";
import personImage from "../../../public/clarity_user-line.png";
import eclipse from "../../../public/Ellipse 6.png";
import logo from "../../../public/logo.png";
import signupImage from "../../../public/signup.png";
import SignupForm from "./_components/SignupForm";

const SignUpPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="relative hidden lg:block">
        <Image
          src={signupImage}
          alt="Signup Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Image src={eclipse} alt="logo" className="w-1/2 h-auto" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Image src={logo} alt="logo" className="w-1/4 h-auto" />
        </div>
      </div>

      <div
        className={`bg-[#EEF9F3] flex flex-col items-center justify-center h-full p-6 ${
          darkMode && "bg-neutral-900"
        }`}
      >
        <div className="flex flex-col justify-center items-center">
          <h1
            className={`text-[#121C17] text-[48px] font-bold leading-[57.6px] text-center ${
              darkMode && "text-white"
            }`}
          >
            SIGN UP
          </h1>
          <div className="relative mt-6">
            <Image
              src={eclipse}
              alt="profile picture"
              width={181}
              height={181}
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <Image src={personImage} alt="logo" className="w-1/2 h-auto" />
            </div>
          </div>
        </div>
        <SignupForm darkMode={darkMode} />
      </div>
      <button
        onClick={toggleDarkMode}
        className="fixed w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default SignUpPage;
