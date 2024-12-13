const folder = require("../controllers/folderController");

const express = require("express");

const router = express.Router();

router.post("/api/folders/create", folder.createFolder);
router.delete("/api/:folderId/delete", folder.deleteFolder);
router.patch("/api/:folderId/rename", folder.renameFolder);
router.post("/api/folders/moveToSpam", folder.moveToSpam); // there is problem
router.post("/api/folders/search", folder.searchEmails); // what it is done
router.post("/api/folder/createRecycleBin", folder.createRecycleBinFolder);

module.exports = router;
