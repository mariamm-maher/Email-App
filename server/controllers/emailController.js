// const path = require("path");
const nodemailer = require("nodemailer");
const EmailModel = require("../Schemas/emailSchema");
const User = require("../Schemas/userSchema");
// const sendEmail = async (req, res) => {
//   const { from, to, subject, cc, messages, status } = req.body;

//   const email = new EmailModel({
//     from,
//     to,
//     subject,
//     cc,
//     messages,
//     sentAt: status === "sent" ? new Date() : null,
//     emailStatus: status || "draft",
//   });

//   await email.save();

//   const mailOptions = {
//     from,
//     to,
//     subject,
//     cc,
//     text: messages,
//   };

//   if (status === "sent") {
//     const transporter = nodemailer.createTransport({
//       service: " gmail ",
//     });

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send("Error sending email:" + error.message);
//       } else {
//         console.log("Email sent: " + info.response);
//         res.status(200).send("Email sent successfully");
//       }
//     });
//   } else {
//     res.status(200).send("Email saved as draft");
//   }
// };

const sendEmail = async (req, res) => {
  try {
    const { from, to, cc, subject, body, status, folder, attachments } =
      req.body;

    // Ensure 'from' and 'to' are provided
    if (!from || !to || to.length === 0) {
      return res.status(400).json({ error: "No recipients defined" });
    }

    // Create the new email document based on the provided data
    const email = new EmailModel({
      from,
      to,
      cc,
      subject,
      body,
      status: {
        isDraft: status === "draft" ? true : false,
        isArchived: false,
        isSpam: false,
        isImportant: false,
      },
      folder,
      attachments,
      sentAt: status === "sent" ? new Date() : null, // Set the sent timestamp only if the email is sent
      isPinned: false,
      muteStatus: false,
      repliedTo: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Save the email in the database
    await email.save();

    // If the email is not a draft, send it via Nodemailer
    if (status === "sent") {
      const user = await User.findById(from); // Find the user to get email address
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const mailOptions = {
        from: user.email, // User's email address
        to: to.map((userId) => userId.email), // Map to get emails of all recipients
        cc: cc ? cc.map((userId) => userId.email) : [], // Map cc if any
        subject: subject,
        text: body,
        attachments: attachments || [], // If there are attachments, include them
      };

      // Create a transporter to send the email via SMTP (e.g., Gmail)
      const transporter = nodemailer.createTransport({
        service: "gmail", // Replace with your email service provider
        auth: {
          user: "your-email@gmail.com", // Your email address
          pass: "your-email-password", // Your email password or app password
        },
      });

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          return res
            .status(500)
            .json({ error: "Error sending email: " + error.message });
        } else {
          console.log("Email sent: " + info.response);
          return res.status(200).json({ message: "Email sent successfully" });
        }
      });
    } else {
      return res.status(200).json({ message: "Email saved as draft" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error sending email: " + error.message });
  }
};

const forwardEmail = async (req, res) => {
  const { emailId, forwardTo, status } = req.body;

  try {
    const originalEmail = await EmailModel.findById(emailId);

    if (!originalEmail) {
      return res.status(404).send("Original email not found");
    }

    const forwardedEmail = new EmailModel({
      from: originalEmail.from,
      to: forwardTo,
      subject: `Fwd: ${originalEmail.subject}`,
      cc: null,
      messages: `Forwarded message:\n\n${originalEmail.messages}`,
      sentAt: status === "sent" ? new Date() : null,
      emailStatus: status || "draft",
    });

    await forwardedEmail.save();

    const mailOptions = {
      from: originalEmail.from,
      to: forwardTo,
      subject: `Fwd: ${originalEmail.subject}`,
      text: `Forwarded message:\n\n${originalEmail.messages}`,
    };

    if (status === "sent") {
      const transporter = nodemailer.createTransport({
        service: "actual email service",
      });

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).send("Error sending forwarded email");
        } else {
          console.log("Forwarded email sent: " + info.response);
          res.status(200).send("Email forwarded successfully");
        }
      });
    } else {
      res.status(200).send("Forwarded email saved as draft");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error forwarding email");
  }
};
const repliedTo = async (req, res) => {
  const { emailId, replyMessage, replyAll } = req.body;
  const recipients = replyAll
    ? [originalEmail.from, ...originalEmail.cc].filter(Boolean)
    : [originalEmail.from];

  try {
    const originalEmail = await EmailModel.findById(emailId);
    if (!originalEmail) {
      return res.status(404).send("Original email not found");
    }
    const replyOptions = {
      from: originalEmail.to, //  the sender
      to: originalEmail.from, // The recipient
      cc: replyAll ? originalEmail.cc : undefined,
      subject: `Re: ${originalEmail.subject}`,
      text: replyMessage,
    };
    const transporter = nodemailer.createTransport({
      service: "hyroh ll sender page",
    });
    const info = await transporter.sendMail(replyOptions);
    console.log("Reply sent: " + info.response);

    const replyEmail = new EmailModel({
      from: replyOptions.from,
      to: recipients.join,
      cc: replyAll ? originalEmail.cc : undefined,
      subject: replyOptions.subject,
      messages: replyMessage,
      sentAt: new Date(),
    });

    await replyEmail.save();
    res.status(200).send("Reply sent and saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending reply");
  }
};
const markEmailReadStatus = async (req, res) => {
  const { emailId, isRead } = req.body;

  try {
    const email = await EmailModel.findByIdAndUpdate(
      emailId,
      { isRead },
      { new: true }
    );

    if (!email) {
      return res.status(404).send("Email not found");
    }

    const statusText = isRead ? "read" : "unread";
    res.status(200).send(`Email marked as ${statusText}`);
  } catch (error) {
    console.error("Error updating email read status:", error);
    res.status(500).send("Error updating email read status");
  }
};
module.exports = {
  sendEmail,
  forwardEmail,
  repliedTo,
  markEmailReadStatus,
};
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
