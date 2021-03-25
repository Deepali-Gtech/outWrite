const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const Routes = require("./Routes");
// const Routes = require("./Routes");
// const Routes = require("./Routes");

router.use("/users", userRoutes);
// router.use("/", Routes);
// router.use("/", Routes);
// router.use("/", Routes);

module.exports = router;
