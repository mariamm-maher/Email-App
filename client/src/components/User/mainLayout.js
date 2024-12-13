import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Emails from "./email";
const Main = () => {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Emails />} />
        <Route path="/inbox" element={<Emails />} />
        <Route path="/Starred" element={<Emails />} />
        <Route path="/sent" element={<Emails />} />
        <Route path="/draft" element={<Emails />} />
        <Route path="/trash" element={<Emails />} />
        <Route path="/spam" element={<Emails />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Main;
