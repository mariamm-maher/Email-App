const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    max_length: 50,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, // matches user@example.com
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    max_length: 100,
  },
  notification: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "notifications",
  },
  location: {
    latitude: { type: Number, required: false },
    longitude: { type: Number, required: false },
  },
  activeStatus: {
    type: Boolean,
    default: false,
  },
  profileImage: { type: String, default: null },
  role: { type: String, default: "User" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // role: { type: mongoose.Schema.Types.ObjectId, ref: "roles" },
});

userSchema.pre("save", function (next) {
  this.updatedAt = Date.now(); // Set updatedAt to current date
  next();
});

module.exports = mongoose.model("users", userSchema);
