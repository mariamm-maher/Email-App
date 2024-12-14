import React, { useState, useEffect } from "react";
import InputField from "../components/global/input";
import BackgroundAnimation from "../components/global/background";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
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
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/SignUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create account");
      }

      console.log("Account created successfully");
      setSuccess(true);
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/login", { state: { successMessage: "Sign up successful!" } });
    }
  }, [success, navigate]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkNavyBlue">
      <BackgroundAnimation />
      <div className="z-10 bg-gradient-to-r from-darkNavyBlue via-gray-900 to-darkNavyBlue p-10 rounded-lg shadow-xl w-full max-w-md">
        {/* {success && (
          <div className="bg-green-500 text-white font-bold p-4 rounded mb-4 text-center">
            Sign up successful!{" "}
            <Link to="/login" className="underline">
              Click here to log in.
            </Link>
          </div>
        )} */}
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
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
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
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
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
                placeholder="Create a password"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password}</span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-neonMintGreen text-darkNavyBlue font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-green-500"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          {errors.submit && (
            <span className="text-red-500 text-sm">{errors.submit}</span>
          )}
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
