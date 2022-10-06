const express = require("express");
const controller = require("/home/ds/Neoflex/Web-calculator/controllers/controller.js");
const router = express.Router();
const jsonParser = express.json();

router.use("/site", controller.result);
router.use("/", controller.index);

module.exports = router;