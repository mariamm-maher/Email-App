// const path = require("path");

//const nodemailer = require("nodemailer");
const EmailModel = require("../Schemas/emailSchema");
const mongoose = require("mongoose");

const email = require("../Schemas/emailSchema");

// const ListEmails = async (req, res) => {
//   try {
//     let EID = req.EID;
//     // console.log(EID.emailsArray)
//     let emails = await email.find({ _id: { $in: EID.emailsArray } });
//     // console.log(emails);
//     return res.status(200).json({ Fname: req.Fname, emails: emails });
//   } catch (error) {
//     console.log(error);
//   }
// };
const ListEmails = async (req, res) => {
  try {
    if (!req.EID || !req.EID.emailsArray) {
      return res
        .status(400)
        .json({ error: "EID or emailsArray is not defined." });
    }

    let emails = await email.find({ _id: { $in: req.EID.emailsArray } });
    return res.status(200).json({ Fname: req.Fname, emails: emails });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
};

const sendEmail = async (req, res) => {
  const { from, to, subject, cc, messages, repliedTo, isPinned, muteStatus } =
    req.body;

  try {
    // Validate required fields
    if (!from || !to || !subject || !messages) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from) || !emailRegex.test(to)) {
      return res
        .status(400)
        .json({ error: "Invalid email address in 'from' or 'to'" });
    }

    // Validate CC email addresses
    if (cc && !cc.every((email) => emailRegex.test(email))) {
      return res.status(400).json({ error: "Invalid email address in 'cc'" });
    }

    // Save email to the database
    const email = new EmailModel({
      from,
      to,
      subject,
      cc: Array.isArray(cc) ? cc : [],
      body: messages,
      repliedTo: repliedTo || null,
      isPinned: isPinned || false,
      muteStatus: muteStatus || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await email.save();

    return res.status(200).json({ message: "Email saved successfully" });
  } catch (error) {
    console.error("Error saving email:", error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
};

const forwardEmail = async (req, res) => {
  const { emailId, forwardTo, status } = req.body;

  try {
    const originalEmail = await EmailModel.findById(emailId);

    if (!originalEmail) {
      return res.status(404).json({ error: "Original email not found" });
    }

    // Validate forwarded email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !Array.isArray(forwardTo) ||
      !forwardTo.every((email) => emailRegex.test(email))
    ) {
      return res
        .status(400)
        .json({ error: "Invalid email address in 'forwardTo'" });
    }

    const forwardedEmail = new EmailModel({
      from: originalEmail.from,
      to: forwardTo.join(", "), // Combine forwarded email addresses as string
      subject: `Fwd: ${originalEmail.subject}`,
      cc: originalEmail.cc,
      body: `Forwarded message:\n\n${originalEmail.body}`,
      status: { isDraft: status === "draft" },
      repliedTo: originalEmail._id,
      sentAt: status === "sent" ? new Date() : null,
    });

    await forwardedEmail.save();

    if (status === "sent") {
      res
        .status(200)
        .json({ message: "Forwarded email saved and marked as sent" });
    } else {
      res.status(200).json({ message: "Forwarded email saved as draft" });
    }
  } catch (error) {
    console.error("Error forwarding email:", error);
    res.status(500).json({ error: "Error forwarding email" });
  }
};

const repliedTo = async (req, res) => {
  const { emailId, replyMessage, replyAll } = req.body;

  try {
    const originalEmail = await EmailModel.findById(emailId);

    if (!originalEmail) {
      return res.status(404).json({ error: "Original email not found" });
    }

    const recipients = replyAll
      ? [originalEmail.from, ...originalEmail.cc].filter(Boolean)
      : [originalEmail.from];

    const replyEmail = new EmailModel({
      from: originalEmail.to, // Original 'to' becomes 'from' in reply
      to: originalEmail.from, // Original 'from' becomes 'to' in reply
      cc: replyAll ? originalEmail.cc : undefined,
      subject: `Re: ${originalEmail.subject}`,
      body: replyMessage,
      repliedTo: originalEmail._id,
      sentAt: new Date(),
      isPinned: originalEmail.isPinned,
    });

    await replyEmail.save();

    res.status(200).json({ message: "Reply saved successfully" });
  } catch (error) {
    console.error("Error replying to email:", error);
    res.status(500).json({ error: "Error saving reply email" });
  }
};

const markEmailReadStatus = async (req, res) => {
  const { emailId, isRead } = req.body;

  try {
    if (!emailId || isRead === undefined) {
      return res
        .status(400)
        .json({ error: "Missing required fields: emailId or isRead" });
    }

    const email = await EmailModel.findById(emailId);

    if (!email) {
      return res.status(404).json({ error: "Email not found" });
    }

    email.status.isRead = true;

    const updatedEmail = await email.save().catch((err) => {
      console.error("Save error:", err);
      return res
        .status(500)
        .json({ error: err.message || "Error saving updated email" });
    });

    return res.status(200).json({
      message: "Email successfully marked as read",
      email: updatedEmail,
    });
  } catch (error) {
    console.error("Error updating email read status:", error.message);
    return res
      .status(500)
      .json({ error: error.message || "Error updating email read status" });
  }
};

const retrieveEmailById = async (req, res) => {
  try {
    const { emailId } = req.body; // Extract emailId from the request body

    if (!emailId) {
      return res.status(400).json({ message: "Email ID must be provided" });
    }

    const email = await EmailModel.findById(emailId)
      .populate("from", "name email") // Populate 'from' with 'name' and 'email'
      .populate("to", "name email") // Populate 'to' with 'name' and 'email'
      .populate("cc", "name email"); // Populate 'cc' with 'name' and 'email'

    if (!email) {
      return res.status(404).json({ message: "Email not found" });
    }

    res.status(200).json({ message: "Email retrieved successfully", email });
  } catch (error) {
    console.error("Error retrieving email:", error);
    res
      .status(500)
      .json({ message: "Error retrieving email", error: error.message });
  }
};

const deleteEmail = async (req, res) => {
  try {
    const { emailId } = req.body;

    if (!emailId) {
      return res.status(400).json({ message: "Email ID is required" });
    }

    // Find the "Recycle Bin" folder
    const recycleBinFolder = await FolderModel.findOne({ name: "Recycle Bin" });
    if (!recycleBinFolder) {
      return res
        .status(404)
        .json({ message: "'Recycle Bin' folder not found" });
    }

    // Move the email to the "Recycle Bin"
    const email = await EmailModel.findByIdAndUpdate(
      emailId,
      { folder: recycleBinFolder._id, deletedAt: new Date() },
      { new: true }
    );

    if (!email) {
      return res.status(404).json({ message: "Email not found" });
    }

    res.status(200).json({ message: "Email moved to 'Recycle Bin'", email });
  } catch (error) {
    console.error("Error deleting email:", error);
    res
      .status(500)
      .json({ message: "Error deleting email", error: error.message });
  }
};
const recoverEmail = async (req, res) => {
  try {
    const { emailId, targetFolderId } = req.body;

    if (!emailId || !targetFolderId) {
      return res
        .status(400)
        .json({ message: "Email ID and target folder ID are required" });
    }

    // Check if the target folder exists
    const targetFolder = await FolderModel.findById(targetFolderId);
    if (!targetFolder) {
      return res.status(404).json({ message: "Target folder not found" });
    }

    // Update the email's folder
    const email = await EmailModel.findByIdAndUpdate(
      emailId,
      { folder: targetFolder._id, deletedAt: null }, // Clear the deletedAt field
      { new: true }
    );

    if (!email) {
      return res.status(404).json({ message: "Email not found" });
    }

    res.status(200).json({ message: "Email recovered successfully", email });
  } catch (error) {
    console.error("Error recovering email:", error);
    res
      .status(500)
      .json({ message: "Error recovering email", error: error.message });
  }
};

const sortEmails = async (req, res) => {
  try {
    const { sortBy } = req.body;

    if (!sortBy || !["name", "date"].includes(sortBy)) {
      return res.status(400).json({
        message: "Invalid sort parameter. Use 'name' or 'date'.",
      });
    }

    let sortCriteria = {};
    if (sortBy === "name") {
      sortCriteria = { "from.name": 1 };
    } else if (sortBy === "date") {
      sortCriteria = { createdAt: -1 };
    }

    const emails = await EmailModel.find()
      .populate("from", "name email") // Populate user details
      .sort(sortCriteria);

    if (!emails || emails.length === 0) {
      return res.status(404).json({ message: "No emails found." });
    }

    res.status(200).json({
      message: "Emails sorted successfully",
      emails,
    });
  } catch (error) {
    console.error("Error sorting emails:", error);
    res.status(500).json({
      message: "Error sorting emails",
      error: error.message,
    });
  }
};

module.exports = {
  sendEmail,
  forwardEmail,
  repliedTo,
  markEmailReadStatus,
  retrieveEmailById,
  deleteEmail,
  recoverEmail,
  sortEmails,
  EmailModel,
  ListEmails,
};

// // controllers/emailController.js
// const { publishEmailEvent } = require("../mqtt/mqttClient"); // Import the MQTT client

// // Example function when an email is sent
// exports.sendEmail = (req, res) => {
//   // Email sending logic here (e.g., using a third-party service or SMTP)

//   const emailDetails = {
//     subject: req.body.subject,
//     sender: req.body.sender,
//     receiver: req.body.receiver,
//   };

//   // Publish the event to the MQTT broker
//   publishEmailEvent(emailDetails);

//   // Send response back to the client
//   res.status(200).json({ message: "Email sent successfully" });
// };
