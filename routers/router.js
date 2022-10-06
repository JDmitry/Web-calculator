const express = require("express");
const controller = require(process.cwd() + "/controllers/controller.js");
const router = express.Router();
const jsonParser = express.json();

router.use("/site", controller.result);
router.use("/", controller.index);

module.exports = router;