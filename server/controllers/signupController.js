const bcrypt = require("bcrypt");
const usersDB = require("../database/users");

const signupController = (req, res) => {
  const { email, password, firstName, lastName, nickname } = req.body;

  const existingUser = usersDB.find(
    (user) => user.email === email || user.nickname === nickname
  );
  if (existingUser) {
    return res.status(400).json({ error: "Email or nickname already exists." });
  }

  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Error occurred while hashing password." });
    }

    const newUser = {
      email,
      password: hash,
      firstName,
      lastName,
      nickname,
    };

    // Store the new user in the database
    usersDB.push(newUser);

    return res.status(200).json({ message: "User signed up successfully." });
  });
};

module.exports = signupController;
