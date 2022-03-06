const express = require("express");
const router = express.Router();
const devhome = require("../controllers/devhomeControllers");

router.get("/", devhome.displayHomePage);

module.exports = router;