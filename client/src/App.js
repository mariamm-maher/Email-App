import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signUp";
import LoginPage from "./pages/Login";
import WelcomePage from "./pages/welcome";
import HomePage from "./pages/Home";
// import User from "./components/Admin/user";
// import AdminEmail from "./components/Admin/email";
import Admin from "./pages/Admin";
import Draft from "./components/User/Draft";
import Starred from "./components/User/Starred";
import Sent from "./components/User/Sent";
import Trash from "./components/User/Trash";
import Spam from "./components/User/Spam";
import Email from "./components/User/email";
import Profile from "./pages/UserProfile";
// import Layout from "./components/User/layout";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Layout/>}>
    <Route index element={<HomePage/>}/> */}
        <Route path="/Draft" element={<Draft />} />
        <Route path="/Starred" element={<Starred />} />
        <Route path="/Sent" element={<Sent />} />
        <Route path="/Spam" element={<Spam />} />
        <Route path="/Trash" element={<Trash />} />
        <Route path="/email" element={<Email />} />
        {/* </Route> */}

        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
}
