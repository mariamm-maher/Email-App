import React from "react";
import Navbar from "../components/User/navbar";
import Sidebar from "../components/User/Siderbar2";
import Main from "../components/User/mainLayout";
import { useLocation } from "react-router-dom";
function HomePage() {
  const location = useLocation();
  const successMessage = location.state?.successMessage;
  return (
    <>
      {successMessage && (
        <div className="fixed top-3 right-8 bg-green-500 text-white font-bold p-4 rounded mb-4 text-center">
          {successMessage}
        </div>
      )}
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default HomePage;
