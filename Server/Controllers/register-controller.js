const User = require("../Model/userModel");
const bcrypt = require("bcrypt");
const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password, username } = req.body;
    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (user) {
      let message = "";
      if (email === user.email) {
        message = "Email already exists";
      } else {
        message = "Username already exists";
      }
      return res.status(400).json({
        error: true,
        message,
      });
    }

    const hashPassword = await bcrypt.hash(password, 1);

    User.create({
      email,
      password: hashPassword,
      username,
    }).then((user) => {
      return res.status(200).json({
        message: "Registered Successfully",
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: true,
      message: "Something went wrong",
    });
  }
};

module.exports = registerUser;
