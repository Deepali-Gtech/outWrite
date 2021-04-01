const router = require("express").Router();
const { Prompt, Comment, User, Story } = require("../models");
const withAuth = require("../utils/auth");
var shuffle = require('shuffle-array')

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/create", async (req, res) => {
  try {
    res.render("create", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const storyData = await Story.findAll({
      include: [{ model: User }],
      // where: {
      //   user_id: req.session.user_id,
      // },
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['date_created', 'DESC'],
      ],
    });

    // Serialize data so the template can read it
    const stories = storyData.map((story) => story.get({ plain: true }));
    console.log(stories);
    res.render("dashboard", {
      stories,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/storyview/:prompt_id", async (req, res) => {
  try {
    const id = req.params.prompt_id;
    const prompt = await Prompt.findByPk(id, {
      include: [User, {model: Comment, include: [User]}]
    });
    //serialize our data (remove all the extra junk that sequelize adds to this array of objects)
    const promptData = prompt.get({plain: true});
    console.log(promptData)
    res.render("storyview", {
      logged_in: req.session.logged_in,
      prompt: promptData
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/storyview", async (req, res) => {
  try {
    res.render("storyview", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
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
