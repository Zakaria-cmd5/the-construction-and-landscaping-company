import Image from "next/image";
import searchIcon from "../../public/Frame 5.png";

const Search = () => {
  return (
    <div className="relative ml-10  flex items-center">
      <Image
        src={searchIcon}
        alt="Search Icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
      />
      <input
        className="rounded-lg w-[358px] h-[46px] pl-10 border-[#EEF9F3] focus:border-[#EEF9F3]"
        type="text"
        placeholder="SEARCH..."
      />
    </div>
  );
};

export default Search;
