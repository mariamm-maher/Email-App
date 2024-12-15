const User = require("../Schemas/userSchema");
const Token = require("../middlewares/token");
const Pass = require("../middlewares/PassordEncryption");
// const redis = require("../middlewares/redis");
const folder = require("../Schemas/folderSchema");
// const PasswordHashing = require("../util/PassordEncryption")

exports.login = async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    // console.log(email);
    // console.log(password);
    if (email != null && password != null) {
      let user = await User.findOne({ email: email });
      if (user != null) {
        // console.log(user);
        let pass = new Pass(password, user.password);
        let isvalid = await pass.verfiyPassword();
        if (isvalid != -1) {
          if (isvalid == 1) {
            console.log(`login success`);
            let payload = {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
              // role: "Admin",
            };
            console.log(payload);
            // let t = new Token()
            let token = await Token.generateToken(payload);
            // console.log(`the generated token ${token}`); //mariam
            // res.send({token})
            return res.status(200).json({
              message: "Login successful",
              user: payload,
              token: token,
            });
          } else {
            console.log("wrong password");
            return res
              .status(401)
              .json({ message: "Invalid email or password" });
          }
        } else {
          return res
            .status(400)
            .json({ message: "Email and password are required" });
        }
      } else {
        console.log("invalid email");
        return res.status(401).json({ message: "Invalid email or password" });
      }
    } else {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.AuthToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // console.log(`heres the authHeader ${authHeader}`)
  const token = authHeader && authHeader.split(" ")[1];
  // console.log(`heres the token ${token}`)
  if (token == null) return res.status(401);
  let tkverifiy = await Token.verifyToken(token);
  // console.log(tkverifiy)
  if (tkverifiy != -1) {
    if (tkverifiy != 0) {
      req.user = tkverifiy;
      req.token = token;
      return next();
    } else {
      res.status(403).json({ msg: "your session expired please login again" });
    }
  } else {
    //console.log("somthing went wrong")
    res.status(500).json({ msg: "somthing went wrong" });
  }
};

exports.signUp = async (req, res) => {
  try {
    // let {email,name,password,location} = req.body
    let { email, name, password } = req.body;
    if (email && name && password) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let errmsg = {};
      let hashedpassword = null;
      if (emailRegex.test(email) == false) {
        errmsg.emailErr = "invalid Email Address";
      } else {
        let user = await User.findOne({ email: email }, { email: 1 });
        if (user) {
          errmsg.emailErr = "Email Address already exsits";
        }
      }
      if (name.length < 3) {
        errmsg.nameErr = "your name should be more than 3 characters";
      }
      if (password.length < 8) {
        errmsg.passErr = "your password should be more than 8 characters";
      } else {
        let pass = new Pass(password);
        hashedpassword = await pass.hashPassword();
      }
      //console.log(`these are all the errmsgs: ${errmsg}`)
      console.log(errmsg);
      // console.log(Array.isArray(errmsg) && errmsg.length === 0)
      // console.log(Object.keys(errmsg).length === 0)
      if (Object.keys(errmsg).length === 0) {
        let user = await User.create({
          name: name,
          email: email,
          password: hashedpassword,
        });
        let folders = await folder.insertMany([
          { userEmail: user.email, name: "Inbox", isCustom: false },
          { userEmail: user.email, name: "Send", isCustom: false },
          { userEmail: user.email, name: "Spam", isCustom: false },
          { userEmail: user.email, name: "Draft", isCustom: false },
          { userEmail: user.email, name: "RecycleBin", isCustom: false },
          { userEmail: user.email, name: "Archive", isCustom: false },
        ]);
        if (folders.length !== 0) res.status(200).json(user);
      } else {
        // console.log("no")
        res.status(400).json({ errors: errmsg, data: req.body });
      }
    } else {
      return res
        .status(400)
        .json({ message: "Email, name, and password are required" });
    }
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// exports.changePassword = async(req,res)=>{
//     let user = req.user;
//     let errmsg = {}
//     let otp = req.body.OTP
//     let password = req.body.password.trim()
//     // console.log("otp: "+otp)
//     // console.log("pass: "+password)
//     let pass
//     if (password != null) {
//         let userdata = await User.findOne({ _id: user.id });
//         if (password.length < 8) {
//             errmsg.passErr = "your password should be more than 8 characters"
//             return res.status(400).json({ errors: errmsg, data: req.body })
//         } else {
//             if (userdata != null) {
//                 pass = await new Pass(password).hashPassword();
//                 const now = new Date();
//                 await User.updateOne({ _id: userdata.id }, { password: pass , updatedAt : now});
//                 return res.status(200).json({ msg: 'password changed successfully' });
//             } else {
//                 return res.status(401).json({ msg: 'Invalid email' });
//             }
//         }
//     } else {
//         res.status(400).json({ message: 'Password is required' });
//     }
// }

// exports.forgetPassword = async (req, res) => {
//     let email = req.body.email.trim();
//     let password = req.body.password.trim();

//     if (password == null) {
//         return res.status(400).json({ message: 'Password is required' });
//     }

//     if (password.length < 8) {
//         return res.status(401).json({ passerr: "Your password should be more than 8 characters" });
//     }

//     try {
//         let userdata = await User.findOne({ email: email });
//         if (userdata == null) {
//             return res.status(401).json({ message: 'Invalid email' });
//         }

//         let pass = await new Pass(password).hashPassword();
//         const now = new Date();
//         await User.updateOne({ _id: userdata.id }, { password: pass , updatedAt : now});
//         return res.status(200).json({ msg: 'Password changed successfully' });
//     } catch (error) {
//         console.error('Error updating password:', error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };

// exports.logout = async(req,res)=>
// {
//     const token = req.token;
//     if(redis.addtoBlacklist(token))
//         console.log("blacklisted successfully")
//     res.send({ message: 'Logged out successfully!' });
// }
