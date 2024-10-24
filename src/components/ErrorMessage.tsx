import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (children)
    return (
      <div className="border-2 border-[#D8814F] w-full h-[62px] text-[#D8814F] uppercase flex items-center justify-center mt-4">
        {children}
      </div>
    );
};

export default ErrorMessage;
