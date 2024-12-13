// connection/dbConnection.js
const mongoose = require("mongoose");
const newId = new mongoose.Types.ObjectId();
// mongodb+srv://7assanas34:123@cluster0.d2xp3.mongodb.net/SWproject  // hassan db connection
// Database Singleton Class

class Database {
  constructor() {
    if (!Database.instance) {
      this.connect();
      Database.instance = this;
    }
    return Database.instance;
  }

  connect() {
    mongoose
      .connect("mongodb://localhost:27017/EmailApp")
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("Database connection error:", err));
  }
}

module.exports = new Database();
