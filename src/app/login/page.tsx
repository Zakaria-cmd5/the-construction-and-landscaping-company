import Image from "next/image";
import Link from "next/link";
import loginImage from "../../../public/Rectangle 11.png";
import logo from "../../../public/logo.png";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#EEF9F3] flex flex-col items-center justify-center h-full">
        <div className="flex flex-col justify-center mt-16 items-center">
          <h1 className="text-[#121C17] font-bold text-[96px] leading-[115.2px]">
            WELCOME
          </h1>
          <p className="text-[#121C17] font-bold text-[48px] leading-[57.6px]">
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
        <form className="flex flex-col space-y-3 mt-12">
          <label className="font-medium text-[#121C17] leading-[24.2px]">
            EMAIL ADDRESS
          </label>
          <input
            type="text"
            placeholder="Example@gmail.com"
            className="rounded-lg w-[478px] h-[46px] pl-10 bg-white border border-[#121c17] 
                   focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                   shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                   hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          />
          <label className="font-medium text-[#121C17] leading-[24.2px]">
            PASSWORD
          </label>
          <input
            type="password"
            placeholder="*****************"
            className="rounded-lg w-[478px] h-[46px] pl-10 bg-white border border-[#121c17] 
                   focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                   shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                   hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          />
          <div className="flex items-center w-[478px] mt-2">
            <span className="uppercase font-medium text-[15px] leading-[18.15px]">
              don’t have an account?
            </span>
            <Link
              href="/signup"
              className="text-[#0E7E83] text-[15px] font-medium leading-[18.15px] ml-5"
            >
              SIGN UP
            </Link>
          </div>
          <div className="flex items-center w-[478px] mt-2">
            <span className="uppercase font-medium text-[15px] leading-[18.15px]">
              forget password?
            </span>
            <Link
              href="/signup"
              className="text-[#0E7E83] text-[15px] font-medium leading-[18.15px] ml-5"
            >
              CHANGE PASSWORD
            </Link>
          </div>
          <button className="bg-[#2BE784] text-[#121C17] font-medium rounded-lg w-[204px] h-[49px] mx-auto flex justify-center items-center">
            LOGIN
          </button>
        </form>
      </div>
      <div>
        <Image src={loginImage} alt="Login Image" width={970} height={879} />
      </div>
    </div>
  );
};

export default LoginPage;
