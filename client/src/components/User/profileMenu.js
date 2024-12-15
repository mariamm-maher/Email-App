import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { getUserData } from "../../hooks/auth"; // Your utility function

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch user data
  const user = getUserData();
  const username = user?.name || "Guest";
  const profileImage = user?.profileImage || null; // Assume this field stores the user's image URL

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user"); // Clear token from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="relative">
      {/* Profile Avatar */}
      <div
        className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {profileImage ? (
          <img
            className="w-10 h-10 rounded-full"
            src={profileImage}
            alt={`${username}'s profile`}
          />
        ) : (
          <Avatar name={username} size="40" round />
        )}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <ul>
            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                onClick={() => setIsOpen(false)}
              >
                View Profile
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
