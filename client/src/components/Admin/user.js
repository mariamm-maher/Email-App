import React from "react";

export default function User({ user, onClick }) {
  return (
    <div
      onClick={onClick}
      className="rounded-full relative cursor-pointer overflow-hidden w-40 h-40 bg-gradient-to-br from-[#0A192F] to-[#112240] shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 group"
      aria-label={`View profile of ${user.name}`}
    >
      {/* User Image */}
      <img
        src={user.profileImage}
        alt={user.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#64FFDA] to-transparent bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* User Name */}
        <h3 className="text-[#0A192F] text-lg font-semibold transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {user.name}
        </h3>

        {/* User Email */}
        <p className="text-sm text-[#0A192F] transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          {user.email}
        </p>
      </div>
    </div>
  );
}
