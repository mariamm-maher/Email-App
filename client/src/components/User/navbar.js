// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import Search from "../global/search";
import Logo from "../global/logo";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white bg-opacity-90 dark:bg-darkNavyBlue dark:border-gray-700 shadow-md">
        <div className="absolute inset-x-0 top-[-80px] h-full bg-gradient-to-r from-darkNavyBlue to-neonMintGreen blur-2xl -z-10"></div>

        <div className="px-6 py-4 flex items-center justify-between">
          {/* Brand Name */}
          <Logo />

          {/* Search Bar */}
          <Search />

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <Link
              to="/Profile"
              className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="User profile"
              />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
