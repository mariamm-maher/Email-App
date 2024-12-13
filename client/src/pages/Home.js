import React from "react";
import Navbar from "../components/User/navbar";
import Sidebar from "../components/User/Siderbar2";
import Main from "../components/User/mainLayout";
function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default HomePage;
