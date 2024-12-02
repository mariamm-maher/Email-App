import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Delete icon
import Header from "./header";
// Sample email data (replace with actual data)
const sampleEmails = [
  {
    id: 1,
    to: "johndoe@example.com",
    from: "janesmith@example.com",
    subject: "Meeting Reminder",
    body: "Don't forget about the meeting at 3 PM today. Let me know if you need anything.",
    location: "New York, USA",
  },
  {
    id: 2,
    to: "mikejohnson@example.com",
    from: "johndoe@example.com",
    subject: "Project Update",
    body: "The project is going well. I'll send you the new files shortly.",
    location: "San Francisco, USA",
  },
  {
    id: 3,
    to: "janesmith@example.com",
    from: "mikejohnson@example.com",
    subject: "Invoice",
    body: "Please find attached the invoice for the last project.",
    location: "Berlin, Germany",
  },
  // More emails...
];

const Emails = () => {
  const [emails, setEmails] = useState(sampleEmails);

  // Function to handle email deletion
  const handleDelete = (id) => {
    setEmails(emails.filter((email) => email.id !== id));
  };

  return (
    <div className="min-h-screen bg-darkNavyBlue text-pureWhite p-8">
      <Header
        title="Emails"
        subtitle="Manage your email communications easily"
        bgColor="bg-darkNavyBlue"
        textColor="text-neonMintGreen"
      />

      {/* Email List Container (Grid Layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {emails.map((email) => (
          <div
            key={email.id}
            className="bg-darkNavyBlue bg-opacity-80 rounded-lg shadow-lg p-6 flex flex-col transition-all hover:scale-105 transform hover:bg-opacity-90"
          >
            {/* Email Content */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-neonMintGreen mb-2">
                {email.subject}
              </h3>
              <div className="text-pureWhite">
                <p>
                  <strong>To:</strong> {email.to}
                </p>
                <p>
                  <strong>From:</strong> {email.from}
                </p>
                <p>
                  <strong>Location:</strong> {email.location}
                </p>
              </div>
            </div>

            {/* Email Body */}
            <p className="text-sm text-pureWhite opacity-80 mb-4">
              {email.body}
            </p>

            {/* Delete Icon */}
            <button
              onClick={() => handleDelete(email.id)}
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

export default Emails;
