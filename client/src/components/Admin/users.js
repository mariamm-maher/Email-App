import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Importing delete icon from react-icons
import Header from "./header";
// Sample user data (replace with actual data)
const sampleUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    imageUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    imageUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mikejohnson@example.com",
    imageUrl: "https://i.pravatar.cc/150?img=3",
  },
  // Add more users here...
];

const Users = () => {
  const [users, setUsers] = useState(sampleUsers);

  // Function to handle user deletion
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Function to add a new user (basic example)
  const handleAddUser = () => {
    const name = prompt("Enter name");
    const email = prompt("Enter email");

    const newUser = {
      id: users.length + 1,
      name,
      email,
      imageUrl: "https://i.pravatar.cc/150?img=" + (users.length + 4), // Simple placeholder for new users
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="min-h-screen bg-darkNavyBlue text-pureWhite p-8">
      <Header
        title="Users"
        subtitle="Manage your Users in Our system"
        bgColor="bg-darkNavyBlue"
        textColor="text-neonMintGreen"
      />
      <div className="flex justify-between mb-6">
        <button
          onClick={handleAddUser}
          className="bg-neonMintGreen hover:bg-opacity-80 text-darkNavyBlue py-2 px-6 rounded-md shadow-lg transition duration-300"
        >
          Add User
        </button>
      </div>

      {/* User List Container (Grid Layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-darkNavyBlue bg-opacity-80 rounded-lg shadow-lg p-4 flex items-center gap-4 transition-all hover:scale-105 transform hover:bg-opacity-90"
          >
            {/* Profile Image */}
            <div className="w-16 h-16 bg-darkNavyBlue rounded-full overflow-hidden border-4 border-neonMintGreen">
              <img
                src={user.imageUrl}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* User Information */}
            <div className="text-pureWhite flex-1">
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-sm">{user.email}</p>
            </div>

            {/* Delete Icon */}
            <button
              onClick={() => handleDelete(user.id)}
              className="text-red-500 hover:text-red-600 focus:outline-none"
            >
              <FaTrashAlt size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
