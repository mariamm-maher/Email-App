import React from "react";
import { HiSearch } from "react-icons/hi";

const Search = () => {
  return (
    <div className="relative flex items-center w-80 ml-24">
      <input
        type="text"
        placeholder="Search users..."
        className="p-3 pl-12 border border-teal-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent text-neonMintGreen placeholder-neonMintGreen w-full"
      />
      <HiSearch className="absolute left-4 text-neonMintGreen text-xl" />
    </div>
  );
};

export default Search;
