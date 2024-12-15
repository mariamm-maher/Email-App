import React from "react";
import { Link } from "react-router-dom";
import Search from "../global/search";
import Logo from "../global/logo";
import ProfileMenu from "./profileMenu"; // Import the new component
import { getUserData } from "../../hooks/auth";
const Navbar = () => {
  const user = getUserData(); // Fetch user data
  const username = user?.name || "Guest";
  return (
    <nav className="fixed top-0 z-50 w-full bg-white bg-opacity-90 dark:bg-darkNavyBlue dark:border-gray-700 shadow-md">
      <div className="absolute inset-x-0 top-[-80px] h-full bg-gradient-to-r from-darkNavyBlue to-neonMintGreen blur-2xl -z-10"></div>

      <div className="px-6 py-4 flex items-center justify-between">
        {/* Brand Name */}
        <Logo />
        {/* Search Bar */}
        <Search placeholder="Search Emails..." />
        <div className="flex items-center space-x-6 bg-transparent p-1 text-[#FFFFFF]  rounded-full shadow-xl hover:bg-[#0A192F]/90 transition duration-300">
          {/* Profile Greeting */}
          <span className=" font-semibold text-[#64FFDA] ml-1 hover:text-[#FFFFFF] transition duration-200">
            Hello , {username}
          </span>

          {/* Profile Menu */}
          <ProfileMenu className="text-[#64FFDA] hover:text-[#FFFFFF] transition duration-200" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
