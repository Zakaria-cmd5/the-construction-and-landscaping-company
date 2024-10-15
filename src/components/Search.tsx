const Search = () => {
  return (
    <input
      className="rounded-lg w-[358px] h-[46px] pl-10 bg-white border border-[#EEF9F3] 
             focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
             shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
             hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
      type="text"
      placeholder="SEARCH..."
    />
  );
};

export default Search;
