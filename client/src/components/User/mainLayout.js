import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Folder from "./folder";

const Main = () => {
  const inboxData = [
    { name: "Neil Sims", email: "neil@mailer.com" },
    { name: "Bonnie Green", email: "bonnie@mailer.com" },
    { name: "Michael Gough", email: "michael@mailer.com" },
  ];

  const sentData = [
    { name: "Jane Doe", email: "jane@mailer.com" },
    { name: "John Smith", email: "john@mailer.com" },
  ];

  const starredData = [
    { name: "Chris Adams", email: "chris@mailer.com" },
    { name: "Sophia Lee", email: "sophia@mailer.com" },
  ];

  const draftData = [
    { name: "Mike Johnson", email: "mike@mailer.com" },
    { name: "Emily Brown", email: "emily@mailer.com" },
  ];

  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Folder title="Inbox" emails={inboxData} />} />
        <Route
          path="/sent"
          element={<Folder title="Sent" emails={sentData} />}
        />
        <Route
          path="/starred"
          element={<Folder title="Starred" emails={starredData} />}
        />
        <Route
          path="/draft"
          element={<Folder title="Draft" emails={draftData} />}
        />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Main;
