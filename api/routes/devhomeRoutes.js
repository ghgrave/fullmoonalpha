const express = require("express");
const router = express.Router();
const devhome = require("../controllers/devhomeControllers");

router.get("/", devhome.displayHomePage);
router.post("/upload", devhome.uploadImage);

module.exports = router;