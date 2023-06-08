const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

const authenticateUser = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized. Missing token." });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized. Invalid token." });
  }
};

module.exports = authenticateUser;
