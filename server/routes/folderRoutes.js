// const folder = require("../controllers/folderController");
// // const authController = require("../controllers/authenication");
// // const redis = require("../middlewares/redis");
// const email = require("../controllers/emailController");

// const express = require("express");
// const router = express.Router();

// router.post(
//   "/api/folders/create",
//   authController.AuthToken,
//   redis.checkBlacklist,
//   folder.createFolder
// );
// router.post(
//   "/api/foldedrs/:folderId/delete",
//   authController.AuthToken,
//   redis.checkBlacklist,
//   folder.deleteFolder
// );
// router.post(
//   "/api/foldedrs/:folderId/rename",
//   authController.AuthToken,
//   redis.checkBlacklist,
//   folder.renameFolder
// );
// router.post(
//   "/api/folders/moveToSpam/:folderName/:emailId",
//   authController.AuthToken,
//   redis.checkBlacklist,
//   folder.moveToSpam
// );
// router.post(
//   "/api/folders/moveToRecycle/:folderId/:emailId",
//   authController.AuthToken,
//   redis.checkBlacklist,
//   folder.moveToRecycleBin
// );
// router.post(
//   "/api/folders/RemoveFromRecycle/:emailId",
//   authController.AuthToken,
//   redis.checkBlacklist,
//   folder.RecoverFromRecycleBin
// );
// router.post(
//   "/api/folders/search",
//   authController.AuthToken,
//   redis.checkBlacklist,
//   folder.searchEmails
// );
// router.get(
//   "/api/folders/",
//   authController.AuthToken,
//   redis.checkBlacklist,
//   folder.getFolder,
//   email.ListEmails
// );

// module.exports = router;
