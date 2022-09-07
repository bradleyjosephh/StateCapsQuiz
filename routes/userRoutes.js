const router = require("express").Router();
const { User, Score } = require("../models");
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.post("/users/register", (req, res) => {
  const {
    username,
    //registers user, passport takes care of the password, hashes it and adds salt
  } = req.body;

  User.register(
    new User({
      username,
    }),
    req.body.password,
    (err) => {
      if (err) {
        console.log(err);
      }
      //returns ok status
      res.sendStatus(200);
    }
  );
});

// login post to give user token to sign in
router.post("/users/login", (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
    }
    //returns a json web token as the result
    res.json(user ? jwt.sign({ id: user.id }, process.env.SECRET) : null);
  });
});

// posts to db after completing a quiz
router.post("/users/scores", passport.authenticate("jwt"), (req, res) => {
  Score.create({
    value: req.body.value,
    uid: req.user.id,
  })
    .then((score) => {
      res.json(score);
    })
    .catch((err) => {
      res.status(500).send("you messed up big boi!");
    });
});

// getting all scores associated with the user
router.get("/users/scores", passport.authenticate("jwt"), (req, res) => {
  Score.find({
    where: { uid: req.user.id },
  })
    .then((scores) => res.json(scores))
    .catch((err) => console.log(err));
});

router.get("/users/scores/public/:username", (req, res) => {
  User.findOne({
    where: { username: req.params.username },
    include: [Score],
  })
    .then((scores) => res.json(scores))
    .catch((err) => console.log(err));
});

// delete or "reset" scores
router.delete("/users/scores", passport.authenticate("jwt"), (req, res) => {
  Score.deleteMany({
    where: { uid: req.user.id },
  })
    .then((scores) => {
      res.json(scores);
    })
    .catch((err) => {
      res.json(err);
    });
});

//export routes
module.exports = router;
