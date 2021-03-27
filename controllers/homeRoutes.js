const router = require("express").Router();
const { Quote, User } = require("../models");
const withAuth = require("../utils/auth");
var shuffle = require('shuffle-array')

router.get("/", async (req, res) => {
  try {
    const quotes = await Quote.findAll({});
    const quotesData = quotes.map((quote) => {
        return quote.dataValues;
      });
    shuffle(quotesData);
    res.render("homepage", {
      logged_in: req.session.logged_in,
      quotesData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
