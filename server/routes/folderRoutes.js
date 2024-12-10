const folder = require("../controllers/folderController");

const express = require("express");

const router = express.Router();

router.post("/api/folders/create", folder.createFolder);
router.post("/api/:folderId/delete", folder.deleteFolder);
router.post("/api/:folderId/rename", folder.renameFolder);
router.post("/api/folders/moveToSpam", folder.moveToSpam);
router.post("/api/folders/search", folder.searchEmails);

module.exports = router;
