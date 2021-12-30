const express = require("express");
const router = express.Router();
const legends = require("../controllers/legendsControllers");

router.get("/", legends.displayLegendsPage);

module.exports = router;