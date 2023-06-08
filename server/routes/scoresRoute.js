const express = require("express");
const Score = require("../database/scoreModel");
const router = express.Router();
const addScoreController = require("../controllers/addScoreController");
// POST /scores - Submit a score
router.post("/scores", addScoreController);
module.exports = router;
