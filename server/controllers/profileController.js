// const { validationResult } = require("express-validator");
// const Token = require("../model/project.schema");
const bcrypt = require("bcrypt");
const User = require("../Schemas/userSchema");
const Folder = require("../Schemas/folderSchema");
const Notification = require("../Schemas/notificationSchema");
//move to user controller
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

const retrieveProfile = async (req, res) => {
  try {
    const { id, email } = req.query;

    // If both id and email are missing, return an error
    if (!id && !email) {
      return res
        .status(400)
        .json({ message: "Either id or email must be provided" });
    }

    // Find user by id or email
    const query = id ? { _id: id } : { email };
    const user = await User.findOne(query)
      .populate("folder") // Populate folders if needed
      .populate("notification") // Populate notifications if needed
      .exec();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User profile retrieved", user });
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res
      .status(500)
      .json({ message: "Error retrieving profile", error: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    // Get user data from the request body
    const {
      userId,
      name,
      email,
      profileImage,
      location,
      activeStatus,
      password,
    } = req.body;

    // Validate user input
    if (!userId || !name || !email) {
      return res
        .status(400)
        .json({ message: "User ID, name, and email are required" });
    }

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user fields with new values
    user.name = name || user.name;
    user.email = email || user.email;
    user.profileImage = profileImage || user.profileImage;
    user.location = location || user.location;
    user.activeStatus =
      activeStatus !== undefined ? activeStatus : user.activeStatus;

    // If password is provided, hash it before saving
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    // Update the timestamp
    user.updatedAt = Date.now();

    // Save the updated user data
    await user.save();

    // Return the updated user profile
    return res
      .status(200)
      .json({ message: "User profile updated successfully", user });
  } catch (error) {
    console.error("Error updating profile:", error);
    res
      .status(500)
      .json({ message: "Error updating profile", error: error.message });
  }
};
//move to Admin controller
// const deactivateUserProfile = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     // Find the user by ID and update their activeStatus to false
//     const user = await User.findByIdAndUpdate(
//       userId,
//       { activeStatus: false },
//       { new: true }
//     );

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "User profile deactivated successfully", user });
//   } catch (error) {
//     console.error("Error deactivating profile:", error);
//     res
//       .status(500)
//       .json({ message: "Error deactivating profile", error: error.message });
//   }
// };

// const deleteUserProfile = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     // Find and delete the user by ID
//     const user = await User.findByIdAndDelete(userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ message: "User profile deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting profile:", error);
//     res
//       .status(500)
//       .json({ message: "Error deleting profile", error: error.message });
//   }
// };

module.exports = {
  retrieveProfile,
  updateProfile,
  createUser,
};
