import Image from "next/image";
import Link from "next/link";
import personImage from "../../../public/clarity_user-line.png";
import eclipse from "../../../public/Ellipse 6.png";
import logo from "../../../public/logo.png";
import signupImage from "../../../public/signup.png";

const SignUpPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="relative">
        <Image src={signupImage} alt="Signup Image" />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Image src={eclipse} alt="logo" className="w-1/2 h-auto" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Image src={logo} alt="logo" className="w-1/4 h-auto" />
        </div>
      </div>

      <div className="bg-[#EEF9F3] flex items-center flex-col h-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#121C17] text-[48px] font-bold leading-[57.6px]">
            SIGN UP
          </h1>
          <div className="relative">
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
        <form className="flex flex-col space-y-3 mx-auto">
          <label className="font-medium text-[#121C17] leading-[24.2px]">
            EMAIL ADDRESS
          </label>
          <input
            className="rounded-lg w-[478px] h-[46px] pl-10 bg-white border border-[#EEF9F3] 
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
            type="email"
            placeholder="Example@gmail.com"
          />
          <label className="font-medium text-[#121C17] leading-[24.2px]">
            PHONE NUMBER
          </label>
          <input
            className="rounded-lg w-[478px] h-[46px] pl-10 bg-white border border-[#EEF9F3] 
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
            type="number"
            placeholder="**********"
          />
          <label className="font-medium text-[#121C17] leading-[24.2px]">
            USER NAME
          </label>
          <input
            className="rounded-lg w-[478px] h-[46px] pl-10 bg-white border border-[#EEF9F3] 
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
            type="text"
            placeholder="@User-Name"
          />
          <label className="font-medium text-[#121C17] leading-[24.2px]">
            PASSWORD
          </label>
          <input
            className="rounded-lg w-[478px] h-[46px] pl-10 bg-white border border-[#EEF9F3] 
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
            type="password"
            placeholder="**********"
          />
          <label className="font-medium text-[#121C17] leading-[24.2px]">
            RE-ENTER PASSWORD
          </label>
          <input
            className="rounded-lg w-[478px] h-[46px] pl-10 bg-white border border-[#EEF9F3] 
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
            type="password"
            placeholder="**********"
          />
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <label className="font-medium text-[#121C17] leading-[24.2px]">
                COUNTRY
              </label>
              <input
                className="rounded-lg w-[220px] h-[46px] pl-10 bg-white border border-[#EEF9F3] 
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-[#121C17] leading-[24.2px]">
                CITY
              </label>
              <input
                className="rounded-lg w-[220px] h-[46px] pl-10 bg-white border border-[#EEF9F3] 
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
                type="text"
              />
            </div>
          </div>
          <button className="bg-[#2BE784] text-[#121C17] font-medium rounded-lg w-[204px] h-[49px] mx-auto flex justify-center items-center">
            SIGNUP
          </button>
          <div className="flex items-center justify-center w-[478px] mt-2">
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
      </div>
    </div>
  );
};

export default SignUpPage;
