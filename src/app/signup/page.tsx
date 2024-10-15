import Image from "next/image";
import personImage from "../../../public/clarity_user-line.png";
import eclipse from "../../../public/Ellipse 6.png";
import logo from "../../../public/logo.png";
import signupImage from "../../../public/signup.png";
import SignupForm from "./_components/SignupForm";

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
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUpPage;
