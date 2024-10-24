import { useDarkMode } from "@/context/DarkModeToggleProvider";
import Link from "next/link";

const LoginLink = () => {
  const { darkMode } = useDarkMode();

  return (
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
  );
};

export default LoginLink;
