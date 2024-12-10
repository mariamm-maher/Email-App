const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  body: { type: String },
  // sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, //omar modifications
  // recipients: [
  //   { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  // ],
  cc: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // For CC recipients
  attachments: [{ type: String }],
  status: {
    isDraft: { type: Boolean, default: false },
    isArchived: { type: Boolean, default: false },
    isSpam: { type: Boolean, default: false },
    isImportant: { type: Boolean, default: false },
  },
  repliedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "emails", // Reference to an email if it's a reply
    default: null,
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
  folder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "folders", // Reference to the Folder schema
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  sentAt: { type: Date },
  // createdAt: { type: Date, default: Date.now },
});

emailSchema.pre("save", function (next) {
  this.updatedAt = Date.now(); // Set updatedAt to current date
  next();
});

module.exports = mongoose.model("emails", emailSchema);
