const mqtt = require("mqtt");
const email = require("../Schemas/emailSchema");
const folder = require("../Schemas/folderSchema");

// Replace with your MQTT broker URL
const brokerUrl = "mqtt://localhost";

// Define the topic you want to subscribe to
const topic = "email";

function createClient() {
  const client = mqtt.connect(brokerUrl);

  client.on("connect", () => {
    console.log("Connected to MQTT broker");
    client.subscribe(topic, (err) => {
      if (!err) {
        console.log(`Subscribed to topic: ${topic}`);
      } else {
        console.error(`Failed to subscribe: ${err}`);
      }
    });
  });

  client.on("message", async (topic, message) => {
    const jsonMessage = JSON.parse(message.toString());

    try {
      let Email = await email.create(jsonMessage);
      // console.log(Email)
      await folder.updateOne(
        { userEmail: jsonMessage.sender, name: "Send" },
        { $push: { emailsArray: Email._id } }
      );
      for (const recipuent of Email.recipients) {
        await folder.updateOne(
          { userEmail: recipuent, name: "Inbox" },
          { $push: { emailsArray: Email._id } }
        );
      }
    } catch (error) {
      console.log(error);
    }
  });

  client.on("error", (err) => {
    console.error(`Connection error: ${err}`);
  });

  return client;
}

module.exports = { createClient };
