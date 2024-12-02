// Header.js
import React from "react";

const Header = ({
  title,
  subtitle,
  bgColor = "bg-darkNavyBlue",
  textColor = "text-pureWhite",
}) => {
  return (
    <div className={`py-16 ${bgColor} ${textColor} text-center`}>
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-xl font-light">{subtitle}</p>}
    </div>
  );
};

export default Header;
