// controllers/adminController.js
const Admin = require("../models/Admin");
const UserModel = require("../Schemas/userSchema");
const EmailModel = require("../Schemas/emailSchema");
const Notification = require("../Schemas/notificationSchema"); // Import Notification model
// const User = require("../models/User"); // Import User model

const viewAllUsers = async (req, res) => {
  try {
    const admin = new Admin(req.adminId, req.adminName, req.adminEmail);
    const users = await admin.viewAllUsers(UserModel);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const viewAllEmails = async (req, res) => {
  try {
    const admin = new Admin(req.adminId, req.adminName, req.adminEmail);
    const emails = await admin.viewAllEmails(EmailModel);
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deactivateUser = async (req, res) => {
  try {
    const admin = new Admin(req.adminId, req.adminName, req.adminEmail);
    await admin.deactivateUser(req.params.userId, UserModel);
    res.status(200).json({ message: "User deactivated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const notifyUsers = async (req, res) => {
  try {
    const { message, type } = req.body;

    // Validate request body
    if (
      !message ||
      !type ||
      !["system", "user", "maintenance"].includes(type)
    ) {
      return res.status(400).json({ error: "Invalid message or type." });
    }

    // Fetch all user IDs
    const users = await UserModel.find({}, "_id");
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found to notify." });
    }

    // Create notification objects for all users
    const notifications = users.map((user) => ({
      user: user._id,
      message,
      type,
      createdAt: new Date(),
    }));

    // Insert notifications into the database
    await Notification.insertMany(notifications);

    res.status(200).json({ message: "Notifications sent to all users!" });
  } catch (error) {
    console.error("Error sending notifications:", error);
    res
      .status(500)
      .json({ error: "Failed to send notifications.", error: error.message });
  }
};
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = {
      name: name,
      email: email,
      password: password,
      // role: role || "user", // Default role is 'user'
    };

    const newUser = new User(user);

    await newUser.save();
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};
module.exports = {
  viewAllUsers,
  viewAllEmails,
  deactivateUser,
  notifyUsers,
  createUser,
};
