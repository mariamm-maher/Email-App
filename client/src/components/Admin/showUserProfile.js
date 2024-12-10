import React from "react";
import { FaTrashAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdPersonOutline, MdUpdate, MdAccessTime } from "react-icons/md";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
export default function UserProfileModal({ user, onClose, onDelete }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-darkNavyBlue  text-pureWhite rounded-lg p-6 w-[90%] max-w-lg relative shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-neonMintGreen hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={user.profileImage || "https://via.placeholder.com/150"}
            alt={user.name}
            className="w-20 h-20 rounded-full border-4 border-neonMintGreen"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
          <button
            className=" text-red-600 py-2 rounded-lg hover:text-red-700 shadow-md transition-all"
            onClick={onDelete}
          >
            <FaTrashAlt />
          </button>
        </div>

        {/* Profile Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MdPersonOutline className="text-neonMintGreen" />
            <p>
              <strong>Role:</strong> {user.role?.name || "N/A"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MdAccessTime className="text-neonMintGreen" />
            <p>
              <strong>Account Created:</strong>{" "}
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MdUpdate className="text-neonMintGreen" />
            <p>
              <strong>Last Updated:</strong>{" "}
              {new Date(user.updatedAt).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-neonMintGreen" />
            <p>
              <strong>Location:</strong>{" "}
              {user.location?.latitude && user.location?.longitude
                ? `${user.location.latitude}, ${user.location.longitude}`
                : "Not Provided"}
            </p>
          </div>

          {/* <p>
            <span>
              {user.activeStatus ? (
                <div>
                  <FaCheckCircle className="text-green-500" />
                </div>
              ) : (
                <div>
                  <strong>suspended </strong>
                  <FaTimesCircle className="text-red-500" />
                </div>
              )}
            </span>
          </p> */}
          <p>
            <span>
              {user.activeStatus ? (
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <strong className="text-green-500 ">active</strong>
                </div>
              ) : (
                <div className="flex items-center">
                  <FaTimesCircle className="text-red-500 mr-2" />
                  <strong className="text-red-500">Suspended</strong>
                </div>
              )}
            </span>
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-neonMintGreen text-darkNavyBlue py-2 rounded-lg hover:bg-green-500 shadow-md transition-all">
            <FaEnvelope /> Send Email
          </button>
        </div>
      </div>
    </div>
  );
}
