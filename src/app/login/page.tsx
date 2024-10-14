import Image from "next/image";
import loginImage from "../../../public/Rectangle 11.png";
import logo from "../../../public/logo.png";
import LoginForm from "./_components/LoginForm";

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
        <LoginForm />
      </div>
      <div>
        <Image src={loginImage} alt="Login Image" width={970} height={879} />
      </div>
    </div>
  );
};

export default LoginPage;
