import ErrorMessage from "@/app/login/_components/ErrorMessage";
import ErrorModel from "@/components/ErrorModel";
import Spinner from "@/components/Spinner";
import { useDarkMode } from "@/context/DarkModeToggleProvider";
import { useAuthForm } from "@/hooks/useAuthForm";
import { SignupFormSchema } from "@/schemas/signupFormSchema";
import Link from "next/link";

interface FormShape {
  email: string;
  password: string;
  reEnterPassword: string;
  phoneNumber: number;
  userName: string;
  city: string;
  country: string;
}

const SignupForm = () => {
  const { darkMode } = useDarkMode();

  const {
    register,
    handleSubmit,
    onSubmit,
    isLoading,
    networkError,
    isClosedModel,
    setIsClosedModel,
    errors,
  } = useAuthForm<FormShape>(SignupFormSchema, "/login");

  return (
    <div>
      <form
        className="flex flex-col space-y-3 mx-auto w-full max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          className={`font-medium text-[#121C17] leading-[24.2px] ${
            darkMode && "text-white"
          }`}
        >
          EMAIL ADDRESS
        </label>
        <input
          className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          type="email"
          placeholder="Example@gmail.com"
          {...register("email")}
        />

        <label
          className={`font-medium text-[#121C17] leading-[24.2px] ${
            darkMode && "text-white"
          }`}
        >
          PHONE NUMBER
        </label>
        <input
          className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          type="number"
          placeholder="**********"
          {...register("phoneNumber")}
        />

        <label
          className={`font-medium text-[#121C17] leading-[24.2px] ${
            darkMode && "text-white"
          }`}
        >
          USER NAME
        </label>
        <input
          className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          type="text"
          placeholder="@User-Name"
          {...register("userName")}
        />

        <label
          className={`font-medium text-[#121C17] leading-[24.2px] ${
            darkMode && "text-white"
          }`}
        >
          PASSWORD
        </label>
        <input
          className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          type="password"
          placeholder="**********"
          {...register("password")}
        />

        <label
          className={`font-medium text-[#121C17] leading-[24.2px] ${
            darkMode && "text-white"
          }`}
        >
          RE-ENTER PASSWORD
        </label>
        <input
          className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
          type="password"
          placeholder="**********"
          {...register("reEnterPassword")}
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
              className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                     focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                     shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                     hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
              type="text"
              {...register("country")}
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
              className="rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3]
                     focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                     shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                     hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
              type="text"
              {...register("city")}
            />
          </div>
        </div>

        <button
          disabled={isLoading}
          className="bg-[#2BE784] text-[#121C17] font-medium rounded-lg w-full max-w-[204px] h-[49px] mx-auto flex justify-center items-center"
        >
          {isLoading ? <Spinner /> : "SIGNUP"}
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

      {networkError && (
        <ErrorModel
          isClosedModel={isClosedModel}
          setIsClosedModel={() => setIsClosedModel(false)}
        />
      )}

      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      {errors.reEnterPassword && (
        <ErrorMessage>{errors.reEnterPassword}</ErrorMessage>
      )}
      {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber}</ErrorMessage>}
      {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
      {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
      {errors.userName && <ErrorMessage>{errors.userName}</ErrorMessage>}
    </div>
  );
};

export default SignupForm;
