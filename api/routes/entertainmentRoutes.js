const express = require("express");
const router = express.Router();

const entertainment = require("../controllers/entertainmentControllers");

router.get("/", entertainment.displayEntertainmentPage);

module.exports = router;
