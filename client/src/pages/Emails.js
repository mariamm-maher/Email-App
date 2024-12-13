import React, { useState } from "react";

import Header from "../components/global/heading";
import Search from "../components/global/search";
import Filter from "../components/global/filter";
import Email from "../components/Admin/email";
import EmailDetailsModal from "../components/Admin/emailDetails";
// Sample email data
const sampleEmails = [
  {
    id: 1,
    subject: "Meeting Reminder",
    body: "Don't forget about the meeting at 3 PM today. Let me know if you need anything.",
    sender: { id: 1, name: "Jane Smith", email: "janesmith@example.com" },
    recipients: [{ id: 2, name: "John Doe", email: "johndoe@example.com" }],
    cc: [],
    attachments: ["file1.pdf", "image2.png"],
    status: {
      isDraft: false,
      isArchived: false,
      isSpam: false,
      isImportant: true,
    },
    repliedTo: null,
    muteStatus: false,
    sentAt: "2024-12-04T10:00:00Z",
    isPinned: false,
    folder: "64a8b2f5e4b012345678abcd",
    createdAt: "2024-12-01T09:00:00Z",
    updatedAt: "2024-12-04T09:00:00Z",
  },
  {
    id: 2,
    subject: "Meeting Reminder",
    body: "Don't forget about the meeting at 3 PM today. Let me know if you need anything.",
    sender: { id: 1, name: "Jane Smith", email: "janesmith@example.com" },
    recipients: [{ id: 2, name: "John Doe", email: "johndoe@example.com" }],
    cc: [],
    attachments: ["file1.pdf", "image2.png"],
    status: {
      isDraft: false,
      isArchived: false,
      isSpam: false,
      isImportant: true,
    },
    repliedTo: null,
    muteStatus: false,
    sentAt: "2024-12-04T10:00:00Z",
    isPinned: false,
    folder: "64a8b2f5e4b012345678abcd",
    createdAt: "2024-12-01T09:00:00Z",
    updatedAt: "2024-12-04T09:00:00Z",
  },
  {
    id: 3,
    subject: "Meeting Reminder",
    body: "Don't forget about the meeting at 3 PM today. Let me know if you need anything.",
    sender: { id: 1, name: "Jane Smith", email: "janesmith@example.com" },
    recipients: [{ id: 2, name: "John Doe", email: "johndoe@example.com" }],
    cc: [],
    attachments: ["file1.pdf", "image2.png"],
    status: {
      isDraft: false,
      isArchived: false,
      isSpam: false,
      isImportant: true,
    },
    repliedTo: null,
    muteStatus: false,
    sentAt: "2024-12-04T10:00:00Z",
    isPinned: false,
    folder: "64a8b2f5e4b012345678abcd",
    createdAt: "2024-12-01T09:00:00Z",
    updatedAt: "2024-12-04T09:00:00Z",
  },
];

const Emails = () => {
  const [emails, setEmails] = useState(sampleEmails);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const [activeSection, setActiveSection] = useState("emails");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Header mainText="Emails" subText="Acess all System Emails" />
      <div className="flex items-center p-6 justify-center space-x-4">
        <Search placeholder="Search Emails..." />
        <Filter />
      </div>
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-8 max-w-screen-lg w-full">
          {emails.map((email) => (
            <Email key={email.id} email={email} onClick={setSelectedEmail} />
          ))}
        </div>
      </div>

      {selectedEmail && (
        <EmailDetailsModal
          email={selectedEmail}
          onClose={() => setSelectedEmail(null)}
        />
      )}

      {/* <Footer /> */}
    </>
  );
};

export default Emails;
