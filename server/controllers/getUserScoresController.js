const Score = require("../database/scoreModel");

const getUserScoresController = (req, res) => {
  const userId = req.params.id;

  Score.find({ $or: [{ email: userId }, { nickname: userId }] })
    .then((userScores) => {
      return res.status(200).json(userScores);
    })
    .catch((error) => {
      return res.status(500).json({ error: "Failed to retrieve user scores." });
    });
};

module.exports = getUserScoresController;
