// utils/auth.js
const jwt = require("jsonwebtoken");

exports.verifyAdminToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") throw new Error("Not authorized");
    req.adminId = decoded.id;
    req.adminName = decoded.username;
    req.adminEmail = decoded.email;
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid token" });
  }
};
