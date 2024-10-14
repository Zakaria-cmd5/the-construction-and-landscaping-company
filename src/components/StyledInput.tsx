interface Props {
  placeholder: string;
  type: string;
  inputType: "search" | "form-input";
}

const StyledInput = ({ placeholder, type, inputType }: Props) => {
  return (
    <input
      className={`rounded-lg ${
        inputType === "search"
          ? "w-[358px] h-[46px]"
          : inputType === "form-input"
          ? "w-[478px] h-[46px]"
          : ""
      }  pl-10 bg-white border border-[#EEF9F3] 
                 focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default StyledInput;
