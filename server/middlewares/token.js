const jwt = require("jsonwebtoken");
require("dotenv").config();
// const redis = require("../middlewares/redis")

class token {
  #token;
  #payload;
  #secretKey;
  #decode;
  constructor() {
    // this.#payload = args.playload
    this.#secretKey = process.env.JWT_SECRET;
    // console.log(`Secret Key: ${this.#secretKey}`);
    // console.log(process.env.JWT_SECRET)
  }

  generateToken = (args) => {
    this.#payload = args;
    // console.log(this.#payload);
    this.#token = jwt.sign(
      this.#payload,
      "e4a0cb07162994ea02acbefda5af23dcdbbb5c42ab6a5e4cb220748001e04453fa2c085e6336827c1278e9fe984f4b464fabb8f581f66bdd326b9415567f176b",
      {
        expiresIn: "30m",
      }
    );
    console.log(this.#token);
    // console.log(`Secret Key from .env: ${this.#secretKey}`);
    return this.#token;
  };

  verifyToken = async (args) => {
    try {
      this.#decode = await jwt.verify(
        args,
        "e4a0cb07162994ea02acbefda5af23dcdbbb5c42ab6a5e4cb220748001e04453fa2c085e6336827c1278e9fe984f4b464fabb8f581f66bdd326b9415567f176b"
      );
      // console.log("decoded form",this.#decode)
      return this.#decode;
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        console.log("--token expired--");
        return 0;
      } else {
        console.log(`error in token validation ${error}`);
        return -1;
      }
    }
  };
}

module.exports = new token();
