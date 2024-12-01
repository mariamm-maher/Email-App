// // controllers/emailController.js
// const { publishEmailEvent } = require("../mqtt/mqttClient"); // Import the MQTT client

// // Example function when an email is sent
// exports.sendEmail = (req, res) => {
//   // Email sending logic here (e.g., using a third-party service or SMTP)

//   const emailDetails = {
//     subject: req.body.subject,
//     sender: req.body.sender,
//     receiver: req.body.receiver,
//   };

//   // Publish the event to the MQTT broker
//   publishEmailEvent(emailDetails);

//   // Send response back to the client
//   res.status(200).json({ message: "Email sent successfully" });
// };
