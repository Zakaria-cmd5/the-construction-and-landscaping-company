import Image from "next/image";
import searchIcon from "../../public/Frame 5.png";

const Search = () => {
  return (
    <div className="relative ml-10 flex items-center">
      <Image
        src={searchIcon}
        alt="Search Icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
      />
      <input
        className="rounded-lg w-[358px] h-[46px] pl-10 bg-white border border-[#EEF9F3] 
                   focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
                   shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
                   hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
        type="text"
        placeholder="SEARCH..."
      />
    </div>
  );
};

export default Search;
