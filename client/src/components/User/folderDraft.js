import React, { useEffect, useState } from "react";
import axios from "axios";
import EmailItem from "./email"; // Import the EmailItem component
import { getAuthToken } from "../../hooks/auth";

const FolderDraft = () => {
  const [folderData, setFolderData] = useState([]); // State to store folder data
  const token = getAuthToken(); // Get auth token

  const fetchFolderData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/folders/Draft",
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const { emails } = response.data; // Extract emails from the response
      setFolderData(emails); // Update state with the emails array
      console.log(emails);
    } catch (error) {
      console.error("Error fetching folder data:", error);
    }
  };

  useEffect(() => {
    fetchFolderData(); // Fetch folder data when the component mounts
  }, []);

  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700 mt-16">
      {folderData.map((email) => (
        <EmailItem key={email._id} email={email} /> // Render each email dynamically
      ))}
    </ul>
  );
};

export default FolderDraft;
