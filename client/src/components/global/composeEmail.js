import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getAuthToken } from "../../hooks/auth";

const ComposeEmail = ({ onClose }) => {
  // State for form fields
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [cc, setCc] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the ID of the current user from the token
    const token = getAuthToken();
    const from = token ? token.userId : ""; // Assuming token contains userId (you should verify this)

    // Prepare email data with dynamic form values
    const emailData = {
      from, // get the ID of the current user from the token
      to: recipient, // get from the form
      subject, // get from the form
      messages: body, // get from the form
      status: "sent", // default value
      folder: "63e4b2f6f10a3e00123abcd7", // default folder ID
      cc: cc ? cc.split(",").map((email) => email.trim()) : [], // optional, split cc emails if provided
      repliedTo: "", // optional (you can dynamically set this if needed)
      isPinned: false, // default value
    };

    console.log("Email Data:", emailData);
    setStatusMessage("Email composed successfully!");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/Email/send",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`, // Include the token
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData), // Send the email data as JSON
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const data = await response.json();
      console.log(data);
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
          <p className="text-sm text-center mt-4 text-gray-400">
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ComposeEmail;
