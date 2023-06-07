const Score = require("../database/scoreModel");

const addScoreController = (req, res) => {
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

  const newScore = new Score({
    email,
    nickname,
    score,
    date,
  });

  newScore
    .save()
    .then(() => {
      return res.status(200).json({ message: "Score added successfully." });
    })
    .catch((error) => {
      return res.status(500).json({ error: "Failed to add score." });
    });
};

module.exports = addScoreController;
