import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperclip,
  FaClock,
  FaTrashAlt,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
export default function EmailDetailsModal({
  email,
  onClose,
  onDelete,
  onHandleSpam,
}) {
  if (!email) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-darkNavyBlue text-pureWhite p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-gray-600"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold text-neonMintGreen mb-4">
          {email.subject || "No Subject"}
        </h2>
        <p
          className="text-gray-300 mb-4"
          dangerouslySetInnerHTML={{ __html: email.body || "No Content" }}
        />

        <div className="text-sm text-gray-200 space-y-3">
          <div className="flex items-center">
            <FaUser className="text-neonMintGreen mr-2" size={16} />
            <strong className="text-neonMintGreen">From:</strong>{" "}
            {email.from || "Unknown"}
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-neonMintGreen mr-2" size={16} />
            <strong className="text-neonMintGreen">To:</strong>{" "}
            {email.to || "Unknown"}
          </div>
          <div className="flex items-center">
            <FaPaperclip className="text-neonMintGreen mr-2" size={16} />
            <strong className="text-neonMintGreen">Attachments:</strong>{" "}
            {email.attachments.length > 0
              ? email.attachments.join(", ")
              : "None"}
          </div>
          <div className="flex items-center">
            <FaClock className="text-neonMintGreen mr-2" size={16} />
            <strong className="text-neonMintGreen">Sent At:</strong>{" "}
            {new Date(email.sentAt).toLocaleString()}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => onHandleSpam(email._id)}
            className="flex items-center text-yellow-400 hover:text-yellow-500"
          >
            <FaExclamationTriangle className="mr-2" />
            Mark as Spam
          </button>

          <button
            onClick={() => onDelete(email._id)}
            className="flex items-center text-red-400 hover:text-red-600"
          >
            <FaTrashAlt className="mr-2" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
