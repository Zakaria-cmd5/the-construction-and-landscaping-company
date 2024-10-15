interface Props {
  isClosedModel: boolean;
  setIsClosedModel: () => void;
}

const ErrorModel = ({ isClosedModel, setIsClosedModel }: Props) => {
  if (isClosedModel)
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
        <div className="bg-[#EEF9F3] w-[584px] h-[309px] p-6 rounded-[40px] shadow-lg transform transition-transform duration-300 scale-95">
          <h1 className="text-[40px] font-bold text-[#121c17] mb-4 flex justify-center">
            Error
          </h1>
          <p className="text-center text-[#3D624F] mb-4">
            PLEASE WAIT A FEW MINUTES BEFORE YOU TRY AGAIN
          </p>
          <hr className="border-gray-300 mb-4" />
          <div className="flex justify-center">
            <button
              onClick={setIsClosedModel}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    );
};

export default ErrorModel;
