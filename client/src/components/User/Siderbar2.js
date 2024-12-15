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
} from "react-icons/fa";
import Message from "./Message";
import LabelForm from "./LabelForm";

const Sidebar = () => {
  const folders = [
    {
      label: "Inbox",
      icon: <FaInbox className="w-5 h-5 mr-3" />,
      route: "/home/Inbox",
    },
    {
      label: "Starred",
      icon: <FaStar className="w-5 h-5 mr-3" />,
      route: "/home/Starred",
    },
    {
      label: "Sent",
      icon: <FaPaperPlane className="w-5 h-5 mr-3" />,
      route: "/home/Sent",
    },
    {
      label: "Draft",
      icon: <FaFileAlt className="w-5 h-5 mr-3" />,
      route: "/home/Draft",
    },
    {
      label: "Trash",
      icon: <FaTrash className="w-5 h-5 mr-3" />,
      route: "/home/Trash",
    },
    {
      label: "Spam",
      icon: <FaExclamationTriangle className="w-5 h-5 mr-3" />,
      route: "/home/Spam",
    },
  ];

  return (
    <aside
      className="w-1/6 fixed top-0 left-0 h-screen pt-20 bg-darkNavyBlue shadow-lg"
      aria-label="Sidebar"
    >
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neonMintGreen to-darkNavyBlue opacity-25 blur-lg -z-10"></div>

        <ul className="space-y-5 font-medium px-4">
          <li className="mt-3">
            <Message />
          </li>

          {folders.map(({ label, icon, route }) => (
            <li key={label}>
              <Link
                to={route}
                className="flex items-center p-2 text-white rounded-lg hover:bg-neonMintGreen hover:text-darkNavyBlue transition-colors"
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}

          <li>
            <LabelForm />
          </li>
        </ul>
      </div>

      <ul className="fixed bottom-7 left-0 space-y-2 font-medium px-4">
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
  );
};

export default Sidebar;
