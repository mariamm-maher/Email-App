import React, { useState, useEffect } from "react";
import InputField from "../components/global/input";
import { Link, useNavigate } from "react-router-dom";
import BackgroundAnimation from "../components/global/background";
import { useLocation } from "react-router-dom";

export default function LoginPage() {
  const [userRole, setUserRole] = useState("");
  const location = useLocation();
  const successMessage = location.state?.successMessage;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear specific error
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim() || !formData.password.trim())
      newErrors.name = "All fields are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to log in");
      }

      const data = await response.json(); // data contains { message, user, token }
      const { token, user } = data;
      setUserRole(user.role);
      // Save token and user to localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Login successful, token and user saved!");
      setSuccess(true);
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      // Navigate based on role
      if (userRole === "Admin") {
        navigate("/admin", {
          state: { successMessage: "Admin login successful!" },
        });
      } else if (userRole === "User") {
        navigate("/home", {
          state: { successMessage: "User login successful!" },
        });
      } else {
        console.error("Unknown role detected:", userRole);
      }
    }
  }, [success, userRole, navigate]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-darkNavyBlue relative">
      {/* Animated Background */}
      <BackgroundAnimation />
      {successMessage && (
        <div className="fixed top-3 right-8 bg-green-500 text-white font-bold p-4 rounded mb-4 text-center">
          {successMessage}
        </div>
      )}
      {/* Login Form */}
      <div className="z-10 bg-gradient-to-r from-darkNavyBlue via-gray-900 to-darkNavyBlue p-10 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pureWhite">
          Welcome Back!
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
          <div className="flex flex-col space-y-4 items-center">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-pureWhite font-semibold">
                Email
              </label>
              <InputField
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="py-3 px-4 rounded-lg bg-darkNavyBlue text-pureWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonMintGreen"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="password"
                className="text-pureWhite font-semibold"
              >
                Password
              </label>
              <InputField
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="py-3 px-4 rounded-lg bg-darkNavyBlue text-pureWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonMintGreen"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-neonMintGreen text-darkNavyBlue font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-green-500"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-neonMintGreen hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
