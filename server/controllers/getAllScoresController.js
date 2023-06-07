const Score = require("../database/scoreModel");

const getAllScoresController = (req, res) => {
  Score.find()
    .then((scores) => {
      return res.status(200).json(scores);
    })
    .catch((error) => {
      return res.status(500).json({ error: "Failed to retrieve scores." });
    });
};

module.exports = getAllScoresController;
