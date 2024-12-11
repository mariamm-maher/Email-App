const express = require("express");
const app = express();
app.use(express.json());
require("./connection/dbConnection"); // Database singleton pattern.
 const emailRouter = require("./routes/emailRoute");
app.use("/", emailRouter);
const AdminRoutes = require("./routes/AdminRoutes");
const ProfileRoutes = require("./routes/profileRoute");

//app.use("/", AdminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
