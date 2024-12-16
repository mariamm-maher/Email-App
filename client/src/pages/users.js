import React, { useState, useEffect } from "react";

import User from "../components/Admin/user";
import Header from "../components/global/heading";
import Search from "../components/global/search";
import Filter from "../components/global/filter";
import UserProfileModal from "../components/Admin/showUserProfile";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  if (loading) {
    return <div className="text-center py-6">Loading users...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-6">Error: {error}</div>;
  }

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
          {/* <Avatar name={username} size="40" round /> */}
          {users.map((user) => (
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
