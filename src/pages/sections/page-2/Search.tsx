import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative">
        <input
          type="search"
          placeholder="Destination "
          className="pr-10 pl-6 py-2 md:py-[10px] sm:pr-24 md:pr-60 lg:pr-80 xl:pr-96 rounded-full shadow-md bg-slate-50 border focus:outline-none focus:ring-1 focus:ring-emerald-900"
        />
        <button className="absolute right-4 top-1 md:top-2 p-2">
          <FaSearch color="#cbd5e1" />
        </button>
      </div>
    </div>
  );
};

export default Search;
