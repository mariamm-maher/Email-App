import React, { useState } from "react";
import ReactQuill from "react-quill"; // Importing ReactQuill
import "react-quill/dist/quill.snow.css"; // Import the default theme

const ComposeEmail = () => {
  return (
    <div className="compose-email-container">
      <h2 className="text-2xl font-bold text-neonMintGreen mb-4">
        Compose Email
      </h2>

      <form className="space-y-6">
        <div className="mb-4">
          <label className="block text-sm text-gray-200">Recipient</label>
          <input
            type="email"
            className="w-full p-2 bg-darkNavyBlue text-pureWhite rounded-lg border border-gray-700"
            required
            placeholder="Enter recipient's email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-200">Subject</label>
          <input
            type="text"
            className="w-full p-2 bg-darkNavyBlue text-pureWhite rounded-lg border border-gray-700"
            required
            placeholder="Enter subject"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-200">Body</label>
          <ReactQuill
            className="bg-darkNavyBlue text-pureWhite"
            theme="snow"
            placeholder="Write your message here..."
            required
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="px-6 rounded-2xl py-2 bg-neonMintGreen text-darkNavyBlue rounded-lg hover:bg-gray-300 transition-all duration-300"
          >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ComposeEmail;
