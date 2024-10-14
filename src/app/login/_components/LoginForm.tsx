import StyledInput from '@/components/StyledInput'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <form className="flex flex-col space-y-3 mt-12">
          <label className="font-medium text-[#121C17] leading-[24.2px]">
            EMAIL ADDRESS
          </label>
          <StyledInput
            placeholder="Example@gmail.com"
            type="email"
            inputType="form-input"
          />
          <label className="font-medium text-[#121C17] leading-[24.2px]">
            PASSWORD
          </label>
          <StyledInput
            placeholder="**********"
            type="password"
            inputType="form-input"
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
              href="/change-password"
              className="text-[#0E7E83] text-[15px] font-medium leading-[18.15px] ml-5"
            >
              CHANGE PASSWORD
            </Link>
          </div>
          <button className="bg-[#2BE784] text-[#121C17] font-medium rounded-lg w-[204px] h-[49px] mx-auto flex justify-center items-center">
            LOGIN
          </button>
        </form>
  )
}

export default LoginForm