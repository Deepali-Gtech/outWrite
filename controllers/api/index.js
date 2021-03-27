const router = require("express").Router();
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");
const promptRoutes = require("./promptRoutes");
const tagRoutes = require("./tagRoutes");
const quoteRoutes = require("./quoteRoutes");

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/prompts", promptRoutes);
router.use("/tags", tagRoutes);
router.use("/quotes", quoteRoutes);
// router.use("/quotes", quoteRoutes);

module.exports = router;
