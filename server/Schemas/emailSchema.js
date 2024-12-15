const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  body: { type: String },
  to: { type: String, required: true }, // Email address for recipient
  from: { type: String, required: true }, // Email address for sender
  cc: [{ type: String }], // Array of email addresses for CC recipients
  attachments: [{ type: String }], // Array of attachment paths or URLs
  // status: {
  //   isDraft: { type: Boolean, default: false },
  //   isArchived: { type: Boolean, default: false },
  //   isSpam: { type: Boolean, default: false },
  //   isRead: { type: Boolean, default: false },
  //   isImportant: { type: Boolean, default: false },
  // },
  repliedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "emails", // Reference to an email if it's a reply
    default: null,
  },
  forwardTo: {
    type: [String], // Array of email addresses to whom the email is forwarded
    default: [],
  },
  muteStatus: {
    type: Boolean,
    default: false, // false means the email thread is not muted
  },
  sentAt: {
    type: Date,
    default: Date.now, // Timestamp when the email is sent
  },
  isPinned: {
    type: Boolean,
    default: false, // false means the email is not pinned
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date, // Marked as deleted when an email is moved to trash
    default: null,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

emailSchema.pre("save", function (next) {
  this.updatedAt = Date.now(); // Set updatedAt to current date
  next();
});

module.exports = mongoose.model("emails", emailSchema);
const EmailModel = mongoose.model("Email", emailSchema);
module.exports = EmailModel;
