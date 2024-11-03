"use client";

import { changePasswordAction } from "@/actions/changePasswordAction";
import ErrorMessage from "@/components/ErrorMessage";
import Spinner from "@/components/Spinner";
import { useFormState } from "react-dom";
import FormLabel from "../../components/FormLabel";

const inputStyle = `rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3] focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]`;

const cityAndCountryInputStyle = `rounded-lg w-full h-[46px] pl-10 bg-white border border-[#EEF9F3] focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]`;

const ChangePasswordPage = () => {
  const initState = { errors: {}, message: "" };
  const [formState, dispatch, pending] = useFormState(
    changePasswordAction,
    initState
  );

  return (
    <div>
      <form
        className="flex flex-col space-y-3 mx-auto w-full max-w-md my-3"
        action={dispatch}
      >
        <FormLabel>EMAIL ADDRESS</FormLabel>
        <input
          className={inputStyle}
          type="email"
          placeholder="Example@gmail.com"
          name="email"
        />
        <ErrorMessage>{formState.errors?.email?.join(", ")}</ErrorMessage>
        <FormLabel>PHONE NUMBER</FormLabel>
        <input
          className={inputStyle}
          name="phoneNumber"
          type="number"
          placeholder="**********"
        />
        <ErrorMessage>{formState.errors?.phoneNumber?.join(", ")}</ErrorMessage>
        <FormLabel>USER NAME</FormLabel>
        <input
          className={inputStyle}
          name="userName"
          type="text"
          placeholder="@User-Name"
        />
        <ErrorMessage>{formState.errors?.userName?.join(", ")}</ErrorMessage>
        <FormLabel>New PASSWORD</FormLabel>
        <input
          className={inputStyle}
          type="password"
          placeholder="**********"
          name="password"
        />
        <ErrorMessage>{formState.errors?.password?.join(", ")}</ErrorMessage>
        <FormLabel>RE-ENTER PASSWORD</FormLabel>
        <input
          className={inputStyle}
          type="password"
          placeholder="**********"
          name="reEnterPassword"
        />
        <ErrorMessage>
          {formState.errors?.reEnterPassword?.join(", ")}
        </ErrorMessage>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex flex-col">
            <FormLabel>COUNTRY</FormLabel>
            <input
              className={cityAndCountryInputStyle}
              type="text"
              name="country"
            />
          </div>
          <div className="flex flex-col">
            <FormLabel>CITY</FormLabel>
            <input
              className={cityAndCountryInputStyle}
              type="text"
              name="city"
            />
          </div>
        </div>
        <ErrorMessage>{formState.errors?.country?.join(", ")}</ErrorMessage>
        <ErrorMessage>{formState.errors?.city?.join(", ")}</ErrorMessage>
        <ErrorMessage>{formState.message}</ErrorMessage>
        <button
          type="submit"
          disabled={pending}
          className="bg-[#2BE784] text-[#121C17] font-medium rounded-lg w-full max-w-[204px] h-[49px] mx-auto flex justify-center items-center"
        >
          {pending ? <Spinner /> : "Change Your Password"}
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
