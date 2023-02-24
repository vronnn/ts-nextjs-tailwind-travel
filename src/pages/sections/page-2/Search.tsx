import React from "react";
import { FaSearch } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";

const Search = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative">
        <RiMapPin2Fill
          color="#064e3b"
          size={22}
          className="absolute top-2 left-3 md:top-[11px] md:left-4"
        />
        <input
          type="search"
          placeholder="Destination "
          className="pr-10 pl-12 py-2 md:py-[10px] sm:pr-24 md:pr-60 lg:pr-80 xl:pr-96 rounded-full shadow-md bg-slate-50 border focus:outline-none focus:ring-1 focus:ring-slate-700"
        />
        <button className="absolute right-4 top-1 md:top-2 p-2">
          <FaSearch color="#cbd5e1" />
        </button>
      </div>
    </div>
  );
};

export default Search;
