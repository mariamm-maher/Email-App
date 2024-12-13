const User = require("../models/User");
const folders = require("../Schemas/folderSchema.js");
const createFolder = async (req, res) => {
  try {
    const user = new User();
    const result = await folders.find({ name: req.body.name });
    if (result.length === 0) {
      user.createFolder(req.body.name);
      res.status(200).json({ mss: "folder created" });
      return 1;
    }
    res.status(500).json({ mss: "folder already exist" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
const deleteFolder = async (req, res) => {
  try {
    const user = new User();
    const result = await folders.find({ _id: req.params.folderId });
    if (result.length !== 0) {
      user.deleteFolder(req.params.folderId);
      res.status(200).json({ mss: "folder is deleted" });
    }
    res.status(500).json({ mss: "folder is not exist" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
const renameFolder = async (req, res) => {
  try {
    const user = new User();
    const result = await folders.find({ name: req.body.name });
    if (result.length === 0) {
      user.renameFolder(req.params.folderId, req.body.name);
      res.status(200).json({ mss: "folder is updated" });
      return 1;
    }
    res.status(500).json({ mss: "folder is exist try agin" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const moveToSpam = async (req, res) => {
  try {
    const user = new User();

    user.moveToSpam(req.body.name);
    res.status(200).json({ mss: "done" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const searchEmails = async (req, res) => {
  try {
    const user = new User();

    const result = await user.search(req.body.searchName);
    console.log(result);
    res.status(200).json({ data: result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createRecycleBinFolder = async (req, res) => {
  const existingFolder = await folders.findOne({ name: "Recycle Bin" });

  if (!existingFolder) {
    await folders.create({
      name: "Recycle Bin",
      userId: "674e23c4be7dcb4a41c49a8f",
    });
    res.status(200).json({ mss: "Recycle Bin folder created " });
  } else {
    console.log("Recycle Bin folder already exists");
  }
};

module.exports = {
  createFolder,
  deleteFolder,
  renameFolder,
  moveToSpam,
  searchEmails,
  createRecycleBinFolder,
};
