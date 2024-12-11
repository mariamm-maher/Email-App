import React from "react";
import { FiMail } from "react-icons/fi"; // Importing an email icon

const Logo = () => {
  return (
    <a href="#" className="flex items-center space-x-2">
      {/* Icon */}
      <FiMail
        className="w-6 h-6 text-neonMintGreen animate-spin"
        style={{ animationDuration: "2s" }}
      />

      {/* Brand Name */}
      <span
        className="self-center text-2xl font-extrabold sm:text-3xl text-neonMintGreen animate-pulse"
        style={{
          animationDuration: "1.5s",
          fontFamily: "'Poppins', sans-serif", // Using a custom font
        }}
      >
        Mailer
      </span>
    </a>
  );
};

export default Logo;
