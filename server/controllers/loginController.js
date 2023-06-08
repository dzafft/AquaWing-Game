const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../database/users");
const secretKey = process.env.JWT_SECRET;

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    // Compare the password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign(
      { email: user.email, nickname: user.nickname },
      secretKey
    );

    return res
      .status(200)
      .json({ message: "User logged in successfully.", token });
  } catch (error) {
    return res.status(500).json({ error: "Error occurred while logging in." });
  }
};

module.exports = loginController;
