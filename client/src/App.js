import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import SignUp from "./pages/signUp";
import SignIn from "./pages/Login";
import AdminDashboard from "./pages/Admin";
export default function App() {
  return (
    <div>
      <WelcomePage />

    </div>
  );
}
