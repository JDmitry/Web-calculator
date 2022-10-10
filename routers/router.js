const express = require("express");
const controller = require(process.cwd() + "/controllers/controller.js");
const router = express.Router();

router.use("/site", controller.result);
router.use("/", controller.index);

module.exports = router;