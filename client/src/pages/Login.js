import React, { useState } from "react";
import InputField from "../components/global/input";
import { Link, useNavigate } from "react-router-dom";
import BackgroundAnimation from "../components/global/background";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For displaying error messages
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      // API call to check user login
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Check user role and navigate
        if (data.role === "admin") {
          navigate("/dashboard"); // Redirect to admin dashboard
        } else if (data.role === "user") {
          navigate("/home"); // Redirect to homepage for regular users
        } else {
          setError("Unknown user role. Contact support.");
        }
      } else {
        // Handle login errors
        setError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      // Handle network or other errors
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-darkNavyBlue relative">
      {/* Animated Background */}
      <BackgroundAnimation />

      {/* Login Form */}
      <div className="z-10 bg-gradient-to-r from-darkNavyBlue via-gray-900 to-darkNavyBlue p-10 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pureWhite">
          Welcome Back!
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <p className="text-red-500 text-center font-semibold">{error}</p>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="py-3 px-4 rounded-lg bg-darkNavyBlue text-pureWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonMintGreen"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-neonMintGreen text-darkNavyBlue font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-green-500"
          >
            Log In
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
