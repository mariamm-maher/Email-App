import React, { useState } from "react";
import {
  FaUsers,
  FaEnvelope,
  FaMapMarkedAlt,
  FaTools,
  FaCog,
} from "react-icons/fa"; // FontAwesome icons
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; // Icon for collapse

// The Sidebar component with collapse functionality and dynamic icon
const Sidebar = ({ activeSection, handleSectionClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // List of sections for the sidebar
  const sections = [
    { name: "users", label: "Users", icon: <FaUsers /> },
    { name: "emails", label: "Emails", icon: <FaEnvelope /> },
    { name: "map", label: "Map", icon: <FaMapMarkedAlt /> },
    { name: "maintenance", label: "Maintenance", icon: <FaTools /> },
    { name: "otherFeatures", label: "Other Features", icon: <FaCog /> },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-full ${
        isCollapsed ? "w-16" : "w-64"
      } bg-darkNavyBlue p-4 transition-all duration-300`}
    >
      {/* Sidebar toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-4 right-4 bg-darkNavyBlue p-2 rounded-full hover:bg-neonMintGreen transition-all"
      >
        {/* Collapse/Expand icon */}
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
        {sections.map((section) => (
          <a
            key={section.name}
            href={`#${section.name}`}
            onClick={() => handleSectionClick(section.name)}
            className={`flex items-center p-2 rounded-lg text-white ${
              activeSection === section.name
                ? "bg-neonMintGreen text-darkNavyBlue"
                : "hover:bg-neonMintGreen"
            } transition-all duration-300`}
          >
            {/* Sidebar item icon */}
            <span className="text-xl">{section.icon}</span>

            {/* Sidebar item label */}
            <span className={`ml-2 ${isCollapsed ? "hidden" : ""}`}>
              {section.label}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
