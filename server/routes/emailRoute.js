const express = require("express");
const emailController = require("../controllers/emailController");
const authController = require("../controllers/authenication");
// const redis = require("../middlewares/redis");
const router = express.Router();

// router.post("/listEmailINfolder", authController.AuthToken, redis.checkBlacklist,);

// Protected routes
router.post(
  "/api/auth/Email/send",
  authController.AuthToken,
  emailController.sendEmail
);
router.post(
  "/api/auth/Email/replay",
  authController.AuthToken,
  emailController.repliedTo
);
router.get(
  "/api/auth/Email/mark",
  authController.AuthToken,
  emailController.markEmailReadStatus
);
router.get(
  "/api/auth/Email/forward",
  authController.AuthToken,
  emailController.forwardEmail
);

router.post(
  "/api/auth/email/retrieveEmail",
  authController.AuthToken,
  emailController.retrieveEmailById
);
router.post(
  "/api/auth/email/delete",
  authController.AuthToken,
  emailController.deleteEmail
);
router.post(
  "/api/auth/email/recover",
  authController.AuthToken,
  emailController.recoverEmail
);
router.post(
  "/api/auth/email/sort",
  authController.AuthToken,
  emailController.sortEmails
);

module.exports = router;
