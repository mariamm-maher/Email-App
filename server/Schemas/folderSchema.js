const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    MAX_LENGTH: 50,
  },
  isCustom: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  emailsArray: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "emails",
    },
  ],
});

module.exports = mongoose.model("folders", folderSchema);
