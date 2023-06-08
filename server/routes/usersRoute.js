const express = require("express");
const router = express.Router();
const validateInput = require("../middleware/validateInput");
const loginInput = require("../middleware/loginInput");
const signupController = require("../controllers/signupController");
const loginController = require("../controllers/loginController");
const addScoreController = require("../controllers/addScoreController");
const authenticateUser = require("../middleware/authenticateUser");
const getAllScoresController = require("../controllers/getAllScoresController");
const getUserScoresController = require("../controllers/getUserScoresController");
const getLastScoreController = require("../controllers/getLastScoreController");
const getHighestScoreController = require("../controllers/getHighestScoreController");

router.post("/signup", validateInput, signupController);
router.post("/login", loginInput, loginController);
router.post("/scores", addScoreController);
router.get("/scores", authenticateUser, getAllScoresController);
router.get("/scores/:id", authenticateUser, getUserScoresController);
router.get("/scores/last/:id", authenticateUser, getLastScoreController);
router.get("/scores/high/:id", authenticateUser, getHighestScoreController);

module.exports = router;
