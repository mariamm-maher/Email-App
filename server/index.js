const express = require("express");
const app = express();
app.use(express.json());
require("./connection/dbConnection"); // Database singleton pattern.
const emailRoute = require("./routes/emailRoute");
const AdminRoutes = require("./routes/AdminRoutes");
const ProfileRoutes = require("./routes/profileRoute");
const folderRoutes = require("./routes/folderRoutes");
// app.use("/", emailRoute);

// app.use("/", folderRoutes);

app.use("/", AdminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
