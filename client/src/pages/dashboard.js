import { useState } from "react";
import { FaUsers, FaEnvelope, FaChartPie, FaPlus } from "react-icons/fa";
import Header from "../components/global/heading";

import {
  FaUserSlash,
  FaFileAlt,
  FaTrashAlt,
  FaMapMarkedAlt,
  FaFilter,
  FaSearch,
} from "react-icons/fa"; // Importing additional icons
export default function AdminDashboard({
  totalUsers,
  totalEmailsSent,
  totalEmailsReceived,
  privilegedStats,
}) {
  return (
    <>
      <Header mainText="Dashboard" subText="Your overview and statistics" />

      <div className="p-6 bg-gradient-to-r from-darkNavyBlue to-gray-800 text-gray-200 rounded-xl shadow-lg space-y-8 mt-20">
        {/* Dashboard Header */}

        <div className="flex justify-between items-center">
          <button className="flex items-center gap-2 px-6 py-3 bg-neonMintGreen text-darkNavyBlue rounded-lg hover:bg-opacity-90 transition">
            <FaPlus />
            Compose Email
          </button>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Users */}
          <div className="bg-darkNavyBlue p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaUsers className="text-4xl text-neonMintGreen mb-4" />
            <h3 className="text-xl font-semibold">Total Users</h3>
            <p className="text-2xl font-bold">{totalUsers}</p>
          </div>

          {/* Total Emails Sent */}
          <div className="bg-darkNavyBlue p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaEnvelope className="text-4xl text-neonMintGreen mb-4" />
            <h3 className="text-xl font-semibold">Emails Sent</h3>
            <p className="text-2xl font-bold">{totalEmailsSent}</p>
          </div>

          {/* Total Emails Received */}
          <div className="bg-darkNavyBlue p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaEnvelope className="text-4xl text-neonMintGreen mb-4" />
            <h3 className="text-xl font-semibold">Emails Received</h3>
            <p className="text-2xl font-bold">{totalEmailsReceived}</p>
          </div>

          {/* Privileged Statistics */}
          <div className="bg-darkNavyBlue p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaChartPie className="text-4xl text-neonMintGreen mb-4" />
            <h3 className="text-xl font-semibold">Privileged Stats</h3>
            <p className="text-2xl font-bold">{privilegedStats}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          {/* Block User Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-darkNavyBlue text-neonMintGreen rounded-lg hover:bg-opacity-90 transition">
            <FaUserSlash />
            Block User
          </button>

          {/* See Spam Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-darkNavyBlue text-neonMintGreen rounded-lg hover:bg-opacity-90 transition">
            {/* <FaSpam /> */}
            See Spam
          </button>

          {/* Drafts Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-darkNavyBlue text-neonMintGreen rounded-lg hover:bg-opacity-90 transition">
            <FaFileAlt />
            Drafts
          </button>

          {/* Deleted Mails Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-darkNavyBlue text-neonMintGreen rounded-lg hover:bg-opacity-90 transition">
            <FaTrashAlt />
            Deleted Mails
          </button>

          {/* Map Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-darkNavyBlue text-neonMintGreen rounded-lg hover:bg-opacity-90 transition">
            <FaMapMarkedAlt />
            Map
          </button>

          {/* Filter Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-darkNavyBlue text-neonMintGreen rounded-lg hover:bg-opacity-90 transition">
            <FaFilter />
            Filter
          </button>

          {/* Search Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-darkNavyBlue text-neonMintGreen rounded-lg hover:bg-opacity-90 transition">
            <FaSearch />
            Search
          </button>
        </div>
      </div>
    </>
  );
}
