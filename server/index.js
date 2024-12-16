const express = require("express");
require("./connection/dbConnection");
require("dotenv").config();

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000", // Allow only frontend origin
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"], // Allow specific methods
  })
);

const authRoutes = require("./routes/authRoutes");
// login ✅ , sign up ✅
app.use("/", authRoutes);
// send
const emailRoutes = require("./routes/emailRoute");
app.use("/", emailRoutes);

// get foldes and its emails
const folderRoutes = require("./routes/folderRoutes");
app.use("/", folderRoutes);

//admin routes
const adminRoutes = require("./routes/adminRoutes");
app.use("/", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
