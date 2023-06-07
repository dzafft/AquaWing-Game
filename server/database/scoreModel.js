const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  nickname: { type: String, unique: true },
  score: Number,
  date: Date,
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
