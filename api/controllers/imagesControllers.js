const {images} = require('../../data/fakeImageData')

exports.displayImagesPage = (req, res) => {
  res.render("images", {images});
}
