const router = require("express").Router();
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");
const promptRoutes = require("./promptRoutes");
// const tagRoutes = require("./tagRoutes");
const commentRoutes = require("./commentRoutes")

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/prompts", promptRoutes);
// router.use("/tags", tagRoutes);
router.use("/comments", commentRoutes);

// router.use("/quotes", quoteRoutes);
// router.use("/quotes", quoteRoutes);

module.exports = router;
