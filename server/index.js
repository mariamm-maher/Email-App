const express = require("express");
const app = express();
app.use(express.json());
require("./connection/dbConnection"); // Database singleton pattern.
require("../server/controllers/mqttController").createClient();
const emailRoute = require("./routes/emailRoute");
const AdminRoutes = require("./routes/AdminRoutes");
const ProfileRoutes = require("./routes/profileRoute");
const folderRoutes = require("./routes/folderRoutes");
// const profileRoute = require("./routes/profileRoute");
app.use("/", emailRoute);

const AdminRoutes = require("./routes/AdminRoutes");
const authRoutes = require("./routes/authRoutes");
const foldersRoutes = require("./routes/folderRoutes.js");

// app.use("/", folderRoutes);

// app.use("/", AdminRoutes);
// app.use("/auth", authRoutes);

// app.use("/folder",foldersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
