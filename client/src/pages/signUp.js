import React, { useState } from "react";
import InputField from "../components/global/input";
import BackgroundAnimation from "../components/global/background";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error when the user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before sending the API request
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("https://your-api-url.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create account");
      }

      const data = await response.json();
      console.log("Account created successfully:", data);
      alert("Sign up successful!");
    } catch (error) {
      console.error("Error during sign up:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkNavyBlue">
      {/* Animated Background */}
      <BackgroundAnimation />

      {/* Sign Up Form */}
      <div className="z-10 bg-gradient-to-r from-darkNavyBlue via-gray-900 to-darkNavyBlue p-10 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pureWhite">
          Create an Account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4 items-center">
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-pureWhite font-semibold">
                Name
              </label>
              <InputField
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="py-3 px-4 rounded-lg bg-darkNavyBlue text-pureWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonMintGreen"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
          </div>

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
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-4 items-center">
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
                placeholder="Create a password"
                className="py-3 px-4 rounded-lg bg-darkNavyBlue text-pureWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonMintGreen"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password}</span>
              )}
            </div>
          </div>

          {/* <div className="flex flex-col space-y-4 items-center">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="confirmPassword"
                className="text-pureWhite font-semibold"
              >
                Confirm Password
              </label>
              <InputField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className="py-3 px-4 rounded-lg bg-darkNavyBlue text-pureWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonMintGreen"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
          </div> */}

          <button
            type="submit"
            className="w-full bg-neonMintGreen text-darkNavyBlue font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-green-500"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-neonMintGreen hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
