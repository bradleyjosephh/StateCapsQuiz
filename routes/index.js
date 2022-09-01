const router = require("express").Router();

//bring in routes for exporting
router.use("/api", require("./userRoutes.js"));

module.exports = router;
