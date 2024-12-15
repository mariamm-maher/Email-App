import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getAuthToken, getUserData } from "../../hooks/auth";

const ComposeEmail = ({ onClose }) => {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [cc, setCc] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the token and user data
    const token = getAuthToken();
    const user = getUserData();

    if (!token || !user) {
      setStatusMessage("User is not logged in.");
      return;
    }

    const emailData = {
      from: user.email, // sender email
      to: recipient, // recipient email (from the form)
      subject,
      messages: body,
      cc: cc ? cc.split(",").map((email) => email.trim()) : [],
      repliedTo: "",
      isPinned: false,
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/Email/send",
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );

      if (!response.ok) throw new Error("Failed to send email");
      setStatusMessage("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("Error sending email. Please try again.");
    }
  };

  return (
    <div className="compose-email-container">
      <h2 className="text-2xl font-bold text-neonMintGreen mb-4">
        Compose Email
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Recipient */}
        <div className="mb-4">
          <label className="block text-sm text-gray-200">Recipient</label>
          <input
            type="email"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full p-2 bg-darkNavyBlue text-pureWhite rounded-lg border border-gray-700"
            required
            placeholder="Enter recipient's email"
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label className="block text-sm text-gray-200">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 bg-darkNavyBlue text-pureWhite rounded-lg border border-gray-700"
            required
            placeholder="Enter subject"
          />
        </div>

        {/* Body */}
        <div className="mb-4">
          <label className="block text-sm text-gray-200">Body</label>
          <ReactQuill
            className="bg-white text-black"
            theme="snow"
            value={body}
            onChange={setBody}
            placeholder="Write your message here..."
          />
        </div>

        {/* CC */}
        {/* <div className="mb-4">
          <label className="block text-sm text-gray-200">CC</label>
          <input
            type="text"
            value={cc}
            onChange={(e) => setCc(e.target.value)}
            className="w-full p-2 bg-darkNavyBlue text-pureWhite rounded-lg border border-gray-700"
            placeholder="Enter CC emails separated by commas"
          />
        </div> */}
        <div className="mb-4">
          <label className="block text-sm text-gray-200">Attachments</label>
          <input
            type="file"
            multiple
            // onChange={(e) => setAttachments(e.target.files)}
            className="w-full p-2 bg-darkNavyBlue text-pureWhite rounded-lg border border-gray-700"
          />
        </div>
        {/* Submit Button */}
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="px-6 py-2 bg-neonMintGreen text-darkNavyBlue rounded-full hover:bg-gray-300 transition-all duration-300"
          >
            Send Email
          </button>
          <button
            type="button"
            // onClick={saveAsDraft}
            className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-400"
          >
            Save as Draft
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-red-500 text-pureWhite rounded-full hover:bg-red-600 transition-all duration-300"
          >
            Cancel
          </button>
        </div>

        {/* Status Message */}
        {statusMessage && (
          <p className="text-sm text-center mt-4 text-green-400">
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ComposeEmail;
