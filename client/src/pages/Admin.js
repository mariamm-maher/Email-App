import React, { useState } from "react";
import BackgroundAnimation from "../components/global/background";
import Sidebar from "../components/Admin/sideBar";
import Search from "../components/Admin/search";
import DashboardSections from "../components/Admin/dashBoardSection";
import { motion } from "framer-motion"; // For smoother animations

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("users");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // Animation for smooth page transitions
  const sectionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-darkNavyBlue via-gray-900 to-darkNavyBlue text-pureWhite flex">
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />

      {/* Main Content */}
      <div className="flex-1 ml-16 md:ml-1/5 p-8 space-y-6 transition-all duration-300">
        {/* Header */}
        <Search />

        {/* Dashboard Sections with animation */}
        <motion.div
          className="space-y-6"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <DashboardSections activeSection={activeSection} />
        </motion.div>
      </div>
    </div>
  );
}
