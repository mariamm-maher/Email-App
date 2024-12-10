import React, { useState } from "react";
import {
  FaUsers,
  FaEnvelope,
  FaMapMarkedAlt,
  FaChartPie,
} from "react-icons/fa"; // FontAwesome icons
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Sidebar = ({ activeSection, handleSectionClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <aside
      className={`fixed top-2 left-3 rounded-xl ${
        isCollapsed ? "w-16" : "w-64"
      } bg-darkNavyBlue p-4 transition-all duration-300 border-2 border-neonMintGreen`}
    >
      {/* Sidebar toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-4 right-4 bg-darkNavyBlue p-2 rounded-full hover:bg-neonMintGreen transition-all"
      >
        {isCollapsed ? (
          <IoIosArrowForward className="text-white" />
        ) : (
          <IoIosArrowBack className="text-white" />
        )}
      </button>

      {/* Sidebar Header */}
      <h2
        className={`text-xl font-semibold text-neonMintGreen ${
          isCollapsed ? "hidden" : ""
        }`}
      >
        Admin Panel
      </h2>

      {/* Sidebar Navigation */}
      <nav className="space-y-4 mt-8">
        {/* Users Link */}
        <Link
          to="/admin/users"
          onClick={() => handleSectionClick("users")}
          className={`flex items-center p-2 rounded-lg text-white ${
            activeSection === "users"
              ? "bg-neonMintGreen text-darkNavyBlue"
              : "hover:bg-neonMintGreen hover:text-darkNavyBlue"
          } transition-all duration-300`}
        >
          <FaUsers className="text-xl" />
          <span className={`ml-2 ${isCollapsed ? "hidden" : ""}`}>Users</span>
        </Link>

        {/* Emails Link */}
        <Link
          to="/admin/emails"
          onClick={() => handleSectionClick("emails")}
          className={`flex items-center p-2 rounded-lg text-white ${
            activeSection === "emails"
              ? "bg-neonMintGreen text-darkNavyBlue"
              : "hover:bg-neonMintGreen hover:text-darkNavyBlue"
          } transition-all duration-300`}
        >
          <FaEnvelope className="text-xl" />
          <span className={`ml-2 ${isCollapsed ? "hidden" : ""}`}>Emails</span>
        </Link>

        {/* Dashboard Link */}
        <Link
          to="/admin"
          onClick={() => handleSectionClick("dashboard")}
          className={`flex items-center p-2 rounded-lg text-white ${
            activeSection === "dashboard"
              ? "bg-neonMintGreen text-darkNavyBlue"
              : "hover:bg-neonMintGreen hover:text-darkNavyBlue"
          } transition-all duration-300`}
        >
          <FaChartPie className="text-xl" />
          <span className={`ml-2 ${isCollapsed ? "hidden" : ""}`}>
            Dashboard
          </span>
        </Link>

        {/* Map Link (Example of another section) */}
        <Link
          to="/admin/map"
          onClick={() => handleSectionClick("map")}
          className={`flex items-center p-2 rounded-lg text-white ${
            activeSection === "map"
              ? "bg-neonMintGreen text-darkNavyBlue"
              : "hover:bg-neonMintGreen hover:text-darkNavyBlue"
          } transition-all duration-300`}
        >
          <FaMapMarkedAlt className="text-xl" />
          <span className={`ml-2 ${isCollapsed ? "hidden" : ""}`}>Map</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
