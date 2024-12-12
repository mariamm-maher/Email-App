import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import BackgroundAnimation from "../components/global/background";
import Sidebar from "../components/Admin/sideBar";
import { motion } from "framer-motion";
import Navbar from "../components/Admin/navBar";
import Users from "./users";
import Emails from "./Emails";
import Footer from "../components/global/footer";
import AdminDashboard from "./dashboard";
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
    <div className="min-h-screen flex ">
      {/* Background Animation */}
      <BackgroundAnimation />
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />
      <Navbar />
      {/* Main Content */}
      <div className="flex-1 ml-16 md:ml-1/5 p-8 space-y-6 transition-all duration-300">
        {/* <Search /> */}

        {/* Dashboard Sections with animation */}
        <motion.div
          className="space-y-6"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/emails" element={<Emails />} />
            <Route path="/" element={<AdminDashboard />} />
          </Routes>
          <Outlet />
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}
