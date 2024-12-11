const Person = require("./Person");
const emails = require("../Schemas/emailSchema.js");
const folders = require("../Schemas/folderSchema.js");

//inherts from person
class User extends Person {
  constructor(
    id,
    username,
    email,
    password,
    location,
    activeStatus,
    profileImage
  ) {
    super(id, username, email, password);
    this.location = location;
    this.activeStatus = activeStatus;
    this.profileImage = profileImage;
  }
  async createFolder(folderName) {
    const folderT = {
      name: folderName,
      isCustom: true,
      userId: "6751b9c5614bdea23be91136", // what is this ?????????!!!!!!!!
    };

    const folder = new folders(folderT);
    await folder.save();
  }
  async deleteFolder(folderId) {
    await folders.deleteOne({ _id: folderId });
  }
  async renameFolder(id, newName) {
    await folders.updateOne({ _id: id }, { name: newName });
  }
  async moveToSpam(emailId) {
    await folders.updateOne(
      { userId: "6751b9c5614bdea23be91136", name: "spam" }, // there proplem here
      { $push: { emailsID: emailId } }
    );
  }
  async search(searchWord) {
    const res = await emails.find({
      $or: [{ supject: { $regex: searchWord } }],
    });

    return res;
  }
}

module.exports = User;
