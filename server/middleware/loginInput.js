const loginInput = (req, res, next) => {
  const { email, nickname, score, date } = req.body;

  if (!email && !nickname) {
    return res.status(400).json({ error: "Email or nickname is required." });
  }

  if (!score) {
    return res.status(400).json({ error: "Score is required." });
  }

  if (!date) {
    return res.status(400).json({ error: "Date is required." });
  }

  next();
};

module.exports = loginInput;
