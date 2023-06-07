const validateInput = (req, res, next) => {
  const { email, password, confirmPassword, firstName, lastName, nickname } =
    req.body;

  if (
    !email ||
    !password ||
    !confirmPassword ||
    !firstName ||
    !lastName ||
    !nickname
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match." });
  }

  next();
};

module.exports = validateInput;
