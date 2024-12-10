import React, { useState } from "react";
const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  };

  return (
    <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
      <div className="text-sm text-gray-300 space-y-6">
        <div className="flex justify-between items-center">
          <strong className="text-neonMintGreen font-medium tracking-wide">
            Name:
          </strong>
          <span className="text-gray-200 font-light">{user.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <strong className="text-neonMintGreen font-medium tracking-wide">
            Email:
          </strong>
          <span className="text-gray-200 font-light">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
