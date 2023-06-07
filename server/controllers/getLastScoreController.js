const Score = require("../database/scoreModel");

const getLastScoreController = (req, res) => {
  const userId = req.params.id;

  Score.find({ $or: [{ email: userId }, { nickname: userId }] })
    .sort({ date: -1 })
    .limit(1)
    .then((lastScore) => {
      if (lastScore.length === 0) {
        return res.status(404).json({ error: "No scores found for the user." });
      }
      return res.status(200).json(lastScore[0]);
    })
    .catch((error) => {
      return res.status(500).json({ error: "Failed to retrieve last score." });
    });
};

module.exports = getLastScoreController;
