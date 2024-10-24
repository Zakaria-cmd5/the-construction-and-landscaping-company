"use client";

import { useDarkMode } from "@/context/DarkModeToggleProvider";
import Link from "next/link";

const inputStyle = `rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]`;

const cityAndCountryInputStyle = `rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                     focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                     shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                     hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]`;

const SignupForm = () => {
  const { darkMode } = useDarkMode();
  return (
    <div>
      <form
        className="flex flex-col space-y-3 mx-auto w-full max-w-md"
      >
        <label
          className={`font-medium text-[#121C17] leading-[24.2px] ${
            darkMode && "text-white"
          }`}
        >
          EMAIL ADDRESS
        </label>
        <input
          className={inputStyle}
          type="email"
          placeholder="Example@gmail.com"
          name="email"
        />
        <label
          className={`font-medium text-[#121C17] leading-[24.2px] ${
            darkMode && "text-white"
          }`}
        >
          PHONE NUMBER
        </label>
        <input
          className={inputStyle}
          name="phoneNumber"
          type="number"
          placeholder="**********"
        />

        <label
          className={`font-medium text-[#121C17] leading-[24.2px] ${
            darkMode && "text-white"
          }`}
        >
          USER NAME
        </label>
        <input
          className={inputStyle}
          name="userName"
          type="text"
          placeholder="@User-Name"
        />

        <label
          className={`font-medium text-[#121C17] leading-[24.2px] ${
            darkMode && "text-white"
          }`}
        >
          PASSWORD
        </label>
        <input
          className={inputStyle}
          type="password"
          placeholder="**********"
          name="password"
        />

        <label
          className={`font-medium text-[#121C17] leading-[24.2px] ${
            darkMode && "text-white"
          }`}
        >
          RE-ENTER PASSWORD
        </label>
        <input
          className={inputStyle}
          type="password"
          placeholder="**********"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label
              className={`font-medium text-[#121C17] leading-[24.2px] ${
                darkMode && "text-white"
              }`}
            >
              COUNTRY
            </label>
            <input
              className={cityAndCountryInputStyle}
              type="text"
              name="country"
            />
          </div>
          <div className="flex flex-col">
            <label
              className={`font-medium text-[#121C17] leading-[24.2px] ${
                darkMode && "text-white"
              }`}
            >
              CITY
            </label>
            <input
              className={cityAndCountryInputStyle}
              type="text"
              name="city"
            />
          </div>
        </div>

        <button className="bg-[#2BE784] text-[#121C17] font-medium rounded-lg w-full max-w-[204px] h-[49px] mx-auto flex justify-center items-center">
          SIGNUP
        </button>

        <div className="flex items-center justify-center w-full mt-2">
          <span
            className={`uppercase font-medium text-[15px] leading-[18.15px] ${
              darkMode && "text-white"
            }`}
          >
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
    </div>
  );
};

export default SignupForm;
