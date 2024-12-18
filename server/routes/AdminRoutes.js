const express = require("express");
const adminController = require("../controllers/AdminController");
// const { verifyAdminToken } = require("../util/auth"); later
const router = express.Router();

router.get("/api/admin/users", adminController.viewAllUsers);
router.get("/api/admin/emails", adminController.viewAllEmails);
router.post("/api/admin/notify", adminController.notifyUsers);
router.put("/api/users/deactivate/:userId", adminController.deactivateUser); // there is proplem here

module.exports = router;
