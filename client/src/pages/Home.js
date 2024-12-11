import React from "react";
import Navbar from "../components/User/navbar";
import Sidebar from "../components/User/sidebar";
import Emails from "../components/User/email";
import Main from "../components/User/mainLayout";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        {/* <Emails /> */}
        <Main />
      </div>
    </>
  );
}

export default HomePage;
