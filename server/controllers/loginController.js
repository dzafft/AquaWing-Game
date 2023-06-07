const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usersDB = require("../database/users");

const loginController = (req, res) => {
  const { email, password } = req.body;

  const user = usersDB.find((user) => user.email === email);
  if (!user) {
    return res.status(400).json({ error: "Invalid email or password." });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Error occurred while comparing passwords." });
    }

    if (!result) {
      return res.status(400).json({ error: "Invalid email or password." });
    }
    const token = jwt.sign(
      { email: user.email, nickname: user.nickname },
      "secretkey"
    );

    return res
      .status(200)
      .json({ message: "User logged in successfully.", token });
  });
};

module.exports = loginController;
