import React, { useState } from "react";
import User from "../components/Admin/user";
import Header from "../components/global/heading";
import Search from "../components/global/search";
import Filter from "../components/global/filter";
import UserProfileModal from "../components/Admin/showUserProfile";

const sampleUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
    folder: ["64a8b2f5e4b012345678abcd", "64a8b2f5e4b012345678abce"],
    notification: "64a8b2f5e4b012345678abcd",
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    activeStatus: true,
    profileImage: "https://i.pravatar.cc/150?img=1",
    createdAt: "2023-10-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
    role: { name: "Admin", id: "64a8b2f5e4b012345678abcd" },
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    password: "password123",
    folder: ["64a8b2f5e4b012345678abcd"],
    notification: "64a8b2f5e4b012345678abce",
    location: {
      latitude: 40.7128,
      longitude: -74.006,
    },
    activeStatus: false,
    profileImage: "https://i.pravatar.cc/150?img=2",
    createdAt: "2023-09-15T08:00:00Z",
    updatedAt: "2023-12-20T10:00:00Z",
    role: { name: "User", id: "64a8b2f5e4b012345678abcf" },
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mikejohnson@example.com",
    password: "password123",
    folder: [],
    notification: null,
    location: {
      latitude: null,
      longitude: null,
    },
    activeStatus: true,
    profileImage: "https://i.pravatar.cc/150?img=3",
    createdAt: "2023-11-01T12:00:00Z",
    updatedAt: "2024-01-15T15:00:00Z",
    role: { name: "User", id: "64a8b2f5e4b012345678abcg" },
  },
  {
    id: 5,
    name: "Sarah Lee",
    email: "sarahlee@example.com",
    password: "password123",
    folder: ["64a8b2f5e4b012345678abcd", "64a8b2f5e4b012345678abcf"],
    notification: "64a8b2f5e4b012345678abcg",
    location: {
      latitude: 51.5074,
      longitude: -0.1278,
    },
    activeStatus: false,
    profileImage: "https://i.pravatar.cc/150?img=4",
    createdAt: "2023-08-20T09:30:00Z",
    updatedAt: "2023-11-25T14:45:00Z",
    role: { name: "User", id: "64a8b2f5e4b012345678abch" },
  },
  {
    id: 4,
    name: "Sarah Lee",
    email: "sarahlee@example.com",
    password: "password123",
    folder: ["64a8b2f5e4b012345678abcd", "64a8b2f5e4b012345678abcf"],
    notification: "64a8b2f5e4b012345678abcg",
    location: {
      latitude: 51.5074,
      longitude: -0.1278,
    },
    activeStatus: false,
    profileImage: "https://i.pravatar.cc/150?img=4",
    createdAt: "2023-08-20T09:30:00Z",
    updatedAt: "2023-11-25T14:45:00Z",
    role: { name: "User", id: "64a8b2f5e4b012345678abch" },
  },
];

const Users = () => {
  const [users, setUsers] = useState(sampleUsers);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <>
      <Header mainText="Users" subText="Access all System Users" />

      <div className="flex items-center p-6 justify-between ">
        <div className="flex-grow pr-4">
          <Search placeholder="Search users..." />
        </div>
        <div className="flex items-center space-x-4">
          <Filter />
          <button className="px-6 py-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-full shadow-md hover:shadow-lg hover:from-teal-500 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all">
            Email All
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full shadow-md hover:shadow-lg hover:from-red-500 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all">
            Delete All
          </button>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 p-6">
          {sampleUsers.map((user) => (
            <User
              key={user.id}
              user={user}
              onClick={() => handleUserClick(user)}
            />
          ))}
        </div>
      </div>

      {selectedUser && (
        <UserProfileModal
          user={selectedUser}
          onClose={handleCloseModal}
          onDelete={() =>
            setUsers(users.filter((u) => u.id !== selectedUser.id))
          }
        />
      )}
    </>
  );
};

export default Users;
