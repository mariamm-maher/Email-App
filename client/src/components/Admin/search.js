import React from "react";
import { IoSearch } from "react-icons/io5"; // Importing search icon from react-icons

const Search = () => {
  return (
    <header className="flex justify-between items-center space-x-4 p-4">
      {/* Search Bar */}
      <div className="relative flex-1 max-w-xs">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-800 text-pureWhite px-4 py-2 rounded-md w-full pl-10 focus:outline-none focus:ring-2 focus:ring-neonMintGreen transition-all duration-300"
        />
        {/* Search Icon */}
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </header>
  );
};

export default Search;
