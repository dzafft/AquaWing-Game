const bcrypt = require("bcrypt");
const User = require("../database/users");

const signupController = async (req, res) => {
  const { email, password, firstName, lastName, nickname } = req.body;

  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ $or: [{ email }, { nickname }] });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email or nickname already exists." });
    }

    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      email,
      password: hash,
      firstName,
      lastName,
      nickname,
    });

    // Save the new user in the database
    await newUser.save();

    return res.status(200).json({ message: "User signed up successfully." });
  } catch (error) {
    return res.status(500).json({ error: "Error occurred while signing up." });
  }
};

module.exports = signupController;
