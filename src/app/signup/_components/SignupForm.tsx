import Link from "next/link";

const SignupForm = () => {
  return (
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
  );
};

export default SignupForm;
