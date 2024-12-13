const express = require("express");
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
// router.post('/api/Email/send', (req, res) => {
//   const { from, to, cc, subject, messages } = req.body;

//   if (!from || !to || !subject || !messages) {
//     return res.status(400).send('Missing required fields');
//   }});
router.post("/api/Email/Send", emailController.sendEmail);
router.post("/api/Email/replay", emailController.repliedTo);
router.get("/api/Email/mark", emailController.markEmailReadStatus);
router.get("/api/Email/forward", emailController.forwardEmail);
//router.get('/apiEmail/forward', (req, res) => {
 // res.send('Endpoint is working!');
//});

module.exports = router;
