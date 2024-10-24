import { useDarkMode } from "@/context/DarkModeToggleProvider";
import Link from "next/link";

const LoginForm = () => {
  const { darkMode } = useDarkMode();

  return (
    <div>
      <form className="flex flex-col space-y-3 mt-12 sm:space-y-2">
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
        <button className="bg-[#2BE784] text-[#121C17] font-medium rounded-lg w-[204px] max-w-full h-[49px] mx-auto flex justify-center items-center">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
