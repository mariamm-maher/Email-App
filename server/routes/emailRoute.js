const express = require("express");
const router = express.Router();
const emailController = require("../controllers/emailController");
router.get("/", (req, res) => {
  res.send("Server is running");
});
router.get("/home", (req, res) => {
  res.send("Home page is running");
});
router.get("/send", (req, res) => {
  res.sendFile(path.join(__dirname, "../"));
});
router.post("/api/Email/send", emailController.sendEmail);
router.post("/api/Email/replay", emailController.repliedTo);
router.get("/api/Email/mark", emailController.markEmailReadStatus);
router.get("/api/Email/forward", emailController.forwardEmail);

module.exports = router;
