import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signUp";
import LoginPage from "./pages/Login";
import WelcomePage from "./pages/welcome";
import HomePage from "./pages/Home";
import User from "./components/Admin/user";
import Email from "./components/Admin/email";

import Admin from "./pages/Admin";

export default function App() {
  return (
    <Router>
      <Routes>
      
        <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/Draft' element={<Draft/>}/>
        <Route path='/Starred' element={<Starred/>}/>
        <Route path='/Sent' element={<Sent/>}/>
        <Route path='/Spam' element={<Spam/>}/>
        <Route path='/Trash' element={<Trash/>}/>
        <Route path='/Inbox' element={<Inbox/>}/>

        </Route>
        
        
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
}
