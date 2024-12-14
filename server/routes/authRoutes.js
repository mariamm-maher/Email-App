const express = require("express");
const authController = require("../controllers/authenication");
// const redis = require("../middlewares/redis");
// const otp = require("../middlewares/OTP");
const router = express.Router();

router.post("/login", authController.login);

router.post("/SignUp", authController.signUp);

// router.post("/logOut", authController.AuthToken, authController.logout);

// router.post(
//   "/sendotp",
//   authController.AuthToken,
//   redis.checkBlacklist,
//   otp.sendOTP
// ); // Requires authentication

// router.post(
//   "/verifyotp",
//   authController.AuthToken,
//   redis.checkBlacklist,
//   otp.verifyOTP
// ); // Requires authentication

// router.post(
//   "/changePassword",
//   authController.AuthToken,
//   redis.checkBlacklist,
//   otp.verifyOTP,
//   authController.changePassword
// ); // Requires authentication and OTP verification

// router.post("/forgetPassword", otp.sendOTP); // No authentication required for sending OTP for password recovery

// router.post("/resetPassword", otp.verifyOTP, authController.forgetPassword); // No authentication required for resetting password

module.exports = router;
