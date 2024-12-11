import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineInbox,
  AiOutlineStar,
  AiOutlineSend,
  AiOutlineFileText,
} from "react-icons/ai";
import ComposeButton from "./composeEmail";
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
              <ComposeButton />
            </li>

            {[
              {
                label: "Inbox",
                to: "/email",
                icon: <AiOutlineInbox className="w-5 h-5 mr-3" />,
              },
              {
                label: "Starred",
                to: "/Starred",
                icon: <AiOutlineStar className="w-5 h-5 mr-3" />,
              },
              {
                label: "Sent",
                to: "/Sent",
                icon: <AiOutlineSend className="w-5 h-5 mr-3" />,
              },
              {
                label: "Draft",
                to: "/Draft",
                icon: <AiOutlineFileText className="w-5 h-5 mr-3" />,
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
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
