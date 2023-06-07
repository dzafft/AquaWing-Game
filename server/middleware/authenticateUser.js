const authenticateUser = (req, res, next) => {
  // TODO: Implement authentication logic here
  // For example, you can validate the JWT token sent in the request header

  if (!authenticated) {
    return res.status(401).json({ error: "Unauthorized." });
  }

  req.params.id = authenticatedUser.userId;

  next();
};

module.exports = authenticateUser;
