import ProfileModal from "./AdminProfile"; // Import the ProfileModal
import { useState } from "react";
import { FaUser, FaBell, FaSignOutAlt } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
  }; // Example user data

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleCloseModal = () => {
    setIsProfileOpen(false); // Close the modal
  };
  return (
    <>
      <nav className="fixed top-0 right-0 p-4 bg-transparent text-white shadow-lg z-50">
        <div className="flex space-x-4">
          {/* Profile Button */}
          <button
            onClick={toggleProfile}
            className="flex items-center px-4 py-2  hover:border-b-2 hover:border-teal-500  hover:text-neonMintGreen transition-all duration-700"
          >
            <FaUser className="text-xl" />
            <span className="ml-2">Profile</span>
          </button>

          {/* Notifications Button */}
          <button className="flex items-center px-4 py-2 hover:border-b-2 hover:border-teal-500 hover:text-neonMintGreen transition-all duration-700">
            <FaBell className="text-xl" />
            <span className="ml-2">Notifications</span>
          </button>

          {/* Logout Button */}
          <button className="flex items-center px-4 py-2  hover:border-b-2 hover:border-red-700  hover:text-red-500 transition-all duration-700">
            <FaSignOutAlt className="text-xl" />
            <span className="ml-2">Logout</span>
          </button>
        </div>

        {/* Profile Modal */}
        {isProfileOpen && (
          <ProfileModal user={user} onClose={handleCloseModal} />
        )}
      </nav>
    </>
  );
};

export default Navbar;
