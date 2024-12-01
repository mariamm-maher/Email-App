// inherts from person
const Person = require("./Person");

class Admin extends Person {
  constructor(id, username, email, password) {
    super(id, username, email, password);
  }

  async viewAllUsers(userModel) {
    return userModel.find({}, "-password"); // Exclude passwords
  }

  async viewAllEmails(emailModel) {
    return emailModel.find();
  }

  async viewUserLocationOnMap(userModel) {
    return userModel.find({}, "location");
  }

  async deactivateUser(userId, userModel) {
    return userModel.findByIdAndUpdate(userId, { activeStatus: false });
  }

  async deleteUser(userId, userModel) {
    return userModel.findByIdAndDelete(userId);
  }
}

module.exports = Admin;
