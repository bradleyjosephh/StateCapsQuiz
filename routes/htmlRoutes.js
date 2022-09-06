const router = require("express").Router();
const passport = require("passport");
const { join } = require("path");

router.get("/highscores/:user", (req, res) => {
  res.sendFile(join(__dirname, "..", "public", "highscore.html"));
});

module.exports = router;
