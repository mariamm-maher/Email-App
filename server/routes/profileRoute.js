// Profile Routes:
// GET /profile: Retrieve user profile information.
// PUT /profile: Update user profile information (like username, email, or profile picture).
// POST /profile/upload-image: Upload a new profile image.
const express = require("express");
// const { body } = require("express-validator");
const router = express.Router();
const emailController = require("../controllers/profileController");
const { retrieveProfile } = require("../controllers/profileController");

// move to user route
router.post("/api/user", emailController.createUser);
router.get("/api/user/profile", emailController.retrieveProfile);
router.put("/api/user/update", emailController.updateProfile); // Retrieve profile

//move to admin routes
// router.put(
//   "/api/user/deactivate/:userId",
//   emailController.deactivateUserProfile
// );
// router.delete("/api/user/:userId", emailController.deleteUserProfile);

module.exports = router;
