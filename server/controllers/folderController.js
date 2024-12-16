const User = require("../models/User");
const folders = require("../Schemas/folderSchema.js");
const emails = require("../Schemas/emailSchema.js");

exports.createFolder = async (req, res) => {
  try {
    if (req.body.name.length <= 2) {
      return res
        .status(500)
        .json({ mss: "name must be greater than 2 letter" });
    }
    const user = new User();
    const result = await folders.find({
      name: req.body.name,
      userEmail: req.user.email,
    });
    if (result.length === 0) {
      console.log(req.user);
      user.createFolder(req.body.name, req.user.email);
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
    // result.
    if (result.length !== 0) {
      user.deleteFolder(req.params.folderId);
      return res.status(200).json({ mss: "folder is deleted" });
    }
    return res.status(500).json({ mss: "folder is not exist" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.renameFolder = async (req, res) => {
  try {
    const user = new User();
    if (req.body.name.length <= 2) {
      return res
        .status(500)
        .json({ mss: "name must be greater than 2 letter" });
    }
    const result = await folders.find({
      userEmail: req.user.email,
      name: req.body.name,
    });
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

    const result = await emails.find({ _id: req.params.emailId });
    if (result.length === 0) {
      return res.status(400).json({ mss: "it is not email" });
    }
    user.moveToSpam(req.user.email, req.params.emailId, req.params.folderName);
    return res.status(200).json({ mss: "done" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.moveToRecycleBin = async (req, res) => {
  try {
    const user = new User();

    const result = await emails.find({ _id: req.params.emailId });
    if (result.length === 0) {
      return res.status(400).json({ mss: "it is not email" });
    }
    user.moveToRecycle(req.user.email, req.params.emailId, req.params.folderId);
    return res.status(200).json({ mss: "done" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

exports.RecoverFromRecycleBin = async (req, res) => {
  try {
    const user = new User();
    const result = await emails.find({ _id: req.params.emailId });
    if (result.sender == req.user.email) {
      user.RecoverEmail(req.user.email, req.params.emailId, "Send");
    } else user.RecoverEmail(req.user.email, req.params.emailId, "Inbox");
    return res.status(200).json({ msg: "recovered" });
  } catch (error) {
    res.status(500).json({ msg: `something went wrong \n ${error.message}` });
  }
};

exports.searchEmails = async (req, res) => {
  try {
    const user = new User();

    const result = await user.search(req.body.searchName);
    res.status(200).json({ data: result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.moveToFolder = async (req, res) => {
  try {
    // /:Fname1/:emailId/:Fname2
    const user = new User();
    const email = await emails.findOne({ _id: req.params.emailId });
    // console.log(email)
    Fname1 = req.params.Fname1.toLowerCase();
    Fname2 = req.params.Fname2.toLowerCase();
    // console.log(`controller\nfname1:${Fname1}\nfname2:${Fname2}`)
    if (email == null) {
      return res.status(400).json({ msg: "email not found" });
    } else {
      await user.moveToFolder(req.user.email, email.id, Fname1, Fname2);
      return res.status(200).json({ msg: "done" });
    }
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

exports.getFolder = async (req, res, next) => {
  try {
    let user = req.user;
    let Fname = req.params.Fname != null ? req.params.Fname : "Inbox";
    req.Fname = Fname;
    req.EID = await folders.findOne(
      { name: Fname, userEmail: user.email },
      { emailsArray: 1, _id: 0 }
    );
    // console.log(req.EID)
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
