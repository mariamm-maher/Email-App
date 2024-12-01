const Person = require("./Person");
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
}

module.exports = User;
