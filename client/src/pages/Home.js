import React from "react";
import Navbar from "../components/User/navbar";
import Sidebar from "../components/User/sidebar"; 
import Emails from "../components/User/email";
import Layout from "../components/User/layout";

function HomePage() {
  return (
    <>
    
      <Layout/>
      <div className="flex">
        <Sidebar />

        <Emails />
      </div>
    </>
  );
}

export default HomePage;
