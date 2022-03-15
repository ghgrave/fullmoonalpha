const express = require("express");
const router = express.Router();
const images= require("../controllers/imagesControllers");

router.get("/", images.displayImagesPage);
// router.get("/search", images.searchImages);

module.exports = router;