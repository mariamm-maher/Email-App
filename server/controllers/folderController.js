const User = require("../models/User");
const folders = require("../Schemas/folderSchema.js");

exports.createFolder = async (req, res) => {
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
exports.deleteFolder = async (req, res) => {
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
exports.renameFolder = async (req, res) => {
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

exports.moveToSpam = async (req, res) => {
  try {
    const user = new User();

    user.moveToSpam(req.body.name);
    res.status(200).json({ mss: "done" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.searchEmails = async (req, res) => {
  try {
    const user = new User();

    const result = await user.search(req.body.searchName);
    console.log(result);
    res.status(200).json({ data: result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
