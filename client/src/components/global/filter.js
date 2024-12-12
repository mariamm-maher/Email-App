import React, { useState } from "react";
import { HiFilter } from "react-icons/hi";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  const options = ["All", "Active", "Suspended"];

  return (
    <div className="w-48 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent text-neonMintGreen flex items-center justify-between"
      >
        {selectedOption}
        <HiFilter className="text-neonMintGreen" />
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full mt-2 bg-darkNavyBlue text-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-teal-100 hover:text-teal-600 cursor-pointer transition-colors"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
