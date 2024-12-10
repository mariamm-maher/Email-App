import React, { useState } from "react";
import Button from "../components/global/Button";

import BackgroundAnimation from "../components/global/background";

export default function WelcomePage() {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-darkNavyBlue"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <BackgroundAnimation />
      <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center text-pureWhite font-sans tracking-tight z-10">
        Welcome to <span className="text-neonMintGreen">Mailer World</span>
        <div className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neonMintGreen via-white to-darkNavyBlue">
          Let's Start our journey together!
        </div>
      </h2>
      <div
        className={`mt-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-700 ${
          showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Button text="Sign Up" to="/signup" styleType="primary" />
        <Button text="Sign In" to="/login" styleType="secondary" />
      </div>
    </div>
  );
}
