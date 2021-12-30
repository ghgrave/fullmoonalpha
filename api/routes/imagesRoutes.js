const express = require("express");
const router = express.Router();
const images= require("../controllers/imagesControllers");

router.get("/", images.displayImagesPage);

module.exports = router;