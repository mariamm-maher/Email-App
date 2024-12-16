import axios from "axios";

const FOLDER_API_BASE_URL = "http://localhost:5000/api/folders";

export const moveToFolder = async (emailId, fromFolder, toFolder) => {
  try {
    const response = await axios.post(
      `${FOLDER_API_BASE_URL}/movetofolder/${fromFolder}/${emailId}/${toFolder}`
    );
    console.log(
      `Email ${emailId} successfully moved from ${fromFolder} to ${toFolder}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error moving email from ${fromFolder} to ${toFolder}:`,
      error
    );
    throw error;
  }
};

/**
 * Triggers to move emails to specific folders.
 */

// Delete an email (move to 'Trash')
export const deleteEmail = (emailId, fromFolder) =>
  moveToFolder(emailId, fromFolder, "Trash");

// Archive an email (move to 'Archive')
export const archiveEmail = (emailId, fromFolder) =>
  moveToFolder(emailId, fromFolder, "Archive");

// Mark email as spam (move to 'Spam')
export const markAsSpam = (emailId, fromFolder) =>
  moveToFolder(emailId, fromFolder, "Spam");

// Star an email (move to 'Starred')
export const starEmail = (emailId, fromFolder) =>
  moveToFolder(emailId, fromFolder, "Starred");
