import React from "react";
import { Link } from "react-router-dom";
import {
  FaInbox,
  FaStar,
  FaPaperPlane,
  FaFileAlt,
  FaTrash,
  FaExclamationTriangle,
  FaCog,
} from "react-icons/fa"; // Updated icons
import ComposeButton from "./composeEmail";
import Message from "./Message";

const Sidebar = () => {
  return (
    <>
      <aside
        id="logo-sidebar"
        className="w-1/6 fixed top-0 left-0 h-screen pt-20 transition-transform -translate-x-full sm:translate-x-0 bg-darkNavyBlue shadow-lg mt-5"
        aria-label="Sidebar"
      >
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neonMintGreen to-darkNavyBlue opacity-25 blur-lg -z-10"></div>

          <ul className="space-y-4 font-medium px-4">
            <li>
              {/* <ComposeButton /> */}
              <Message />
            </li>

            {[
              {
                label: "Inbox",
                to: "/home/inbox",
                icon: <FaInbox className="w-5 h-5 mr-3" />, // Updated icon
              },
              {
                label: "Starred",
                to: "/home/Starred",
                icon: <FaStar className="w-5 h-5 mr-3" />, // Updated icon
              },
              {
                label: "Sent",
                to: "/home/sent",
                icon: <FaPaperPlane className="w-5 h-5 mr-3" />, // Updated icon
              },
              {
                label: "Draft",
                to: "/home/draft",
                icon: <FaFileAlt className="w-5 h-5 mr-3" />, // Updated icon
              },
            ].map(({ label, to, icon }, index) => (
              <li key={index}>
                <Link
                  to={to}
                  className="flex items-center p-2 text-white rounded-lg hover:bg-neonMintGreen hover:text-darkNavyBlue transition-colors"
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              </li>
            ))}

            {/* Updated Trash icon */}
            <Link
              to="/home/Trash"
              className="flex items-center p-2 text-white rounded-lg hover:bg-neonMintGreen hover:text-darkNavyBlue transition-colors"
            >
              <FaTrash className="w-5 h-5 mr-3" />
              <span>Trash</span>
            </Link>

            {/* Updated Spam icon */}
            <Link
              to="/home/Spam"
              className="flex items-center p-2 text-white rounded-lg hover:bg-neonMintGreen hover:text-darkNavyBlue transition-colors"
            >
              <FaExclamationTriangle className="w-5 h-5 mr-3" />
              <span>Spam</span>
            </Link>
          </ul>
        </div>

        <ul className="fixed bottom-7 left-0 space-y-2 font-medium">
          <li>
            <Link
              to="/home/Settings"
              className="flex items-center p-2 text-white rounded-lg hover:bg-neonMintGreen hover:text-darkNavyBlue transition-colors"
            >
              <FaCog className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center p-2 text-white rounded-lg hover:bg-neonMintGreen hover:text-darkNavyBlue transition-colors"
            >
              <FaFileAlt className="w-5 h-5 mr-3" />
              <span>Support</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
