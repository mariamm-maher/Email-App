// controllers/adminController.js
const Admin = require("../models/Admin");
const UserModel = require("../Schemas/userSchema");
const EmailModel = require("../Schemas/emailSchema");

exports.viewAllUsers = async (req, res) => {
  try {
    const admin = new Admin(req.adminId, req.adminName, req.adminEmail);
    const users = await admin.viewAllUsers(UserModel);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.viewAllEmails = async (req, res) => {
  try {
    const admin = new Admin(req.adminId, req.adminName, req.adminEmail);
    const emails = await admin.viewAllEmails(EmailModel);
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deactivateUser = async (req, res) => {
  try {
    const admin = new Admin(req.adminId, req.adminName, req.adminEmail);
    await admin.deactivateUser(req.params.userId, UserModel);
    res.status(200).json({ message: "User deactivated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
