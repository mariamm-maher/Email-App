// controllers/mqttController.js

const mqttHelper = require("../utils/mqttHelper");

// Subscribe to topics on server start
mqttHelper.connectAndSubscribe();

// Controller function to handle publishing email message
const sendEmailMessage = (req, res) => {
  const { subject, body, to, from } = req.body;

  // Construct email message
  const emailMessage = {
    subject,
    body,
    to,
    from,
    date: new Date().toISOString(),
  };

  // Publish the message to the 'email/send' topic
  mqttHelper.publishMessage("email/send", emailMessage);

  res.status(200).json({ message: "Email message sent to MQTT broker" });
};

// Controller function to handle publishing notification message
const sendNotification = (req, res) => {
  const { notificationMessage } = req.body;

  const notification = {
    message: notificationMessage,
    date: new Date().toISOString(),
  };

  // Publish the notification to the 'notification/send' topic
  mqttHelper.publishMessage("notification/send", notification);

  res.status(200).json({ message: "Notification message sent to MQTT broker" });
};

module.exports = {
  sendEmailMessage,
  sendNotification,
};
