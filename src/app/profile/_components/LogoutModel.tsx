import { logoutAction } from "@/actions/logoutAction";

interface Props {
  isClosedModel: boolean;
  setIsClosedModel: () => void;
}

const LogoutModel = ({ isClosedModel, setIsClosedModel }: Props) => {
  if (isClosedModel)
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
        <div className="bg-[#EEF9F3] w-[584px] h-[309px] p-6 rounded-[40px] shadow-lg transform transition-transform duration-300 scale-95">
          <h1 className="text-[40px] font-bold text-[#121c17] mb-4 flex justify-center uppercase">
            Are you sure you want to logout
          </h1>
          <hr className="border-gray-300 mb-4" />
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => logoutAction()}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              YES
            </button>
            <button
              onClick={setIsClosedModel}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              NO
            </button>
          </div>
        </div>
      </div>
    );
};

export default LogoutModel;
