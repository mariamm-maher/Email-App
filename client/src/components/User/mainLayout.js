import React from "react";
import { Routes, Route } from "react-router-dom";

import FolderInbox from "./folderInbox";
import FolderTrash from "./folderTrash";
import FolderSent from "./folderSent";
import FolderStarred from "./folderStarred";
import FolderSpam from "./folderSpam";
import FolderDraft from "./folderDraft";

const Main = () => {
  return (
    <div className="flex-1 ml-64 p-10">
      <Routes>
        <Route path="/" element={<FolderInbox />} />
        <Route path="Inbox" element={<FolderInbox />} />
        <Route path="Sent" element={<FolderSent />} />
        <Route path="Starred" element={<FolderStarred />} />
        <Route path="Spam" element={<FolderSpam />} />
        <Route path="Trash" element={<FolderTrash />} />
        <Route path="Draft" element={<FolderDraft />} />
      </Routes>
    </div>
  );
};

export default Main;
