import React from "react";
import { HiSearch } from "react-icons/hi";

const Search = ({
  placeholder = "Search...",
  onChange,
  value,
  icon: Icon = HiSearch,
  inputStyles = "",
  containerStyles = "",
}) => {
  return (
    <div className={`relative flex items-center ${containerStyles}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`p-3 pl-12 border border-teal-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent text-neonMintGreen placeholder-neonMintGreen w-full ${inputStyles}`}
      />
      <Icon className="absolute left-4 text-neonMintGreen text-xl" />
    </div>
  );
};

export default Search;
