const Search = () => {
  return (
    <input
      className="hidden xl:block rounded-lg w-full md:w-[358px] h-[2.5rem] md:h-[46px] pl-4 md:pl-10 bg-white border border-[#EEF9F3] 
             focus:ring-2 focus:ring-[#EEF9F3] focus:outline-none
             shadow-[0px_10px_30px_rgba(0,0,0,0.15)] transform transition-all duration-300
             hover:translate-y-[-2px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.25)]"
      type="text"
      placeholder="Search..."
    />
  );
};

export default Search;
