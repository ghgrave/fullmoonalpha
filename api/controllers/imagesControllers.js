// const {images} = require('../../data/fakeImageData')
const { imageInfo } = require("../../data/fakeImageInfo");

exports.displayImagesPage = (req, res) => {
  // creates temp array of elements filtering out those without images
  let tempImageInfo = imageInfo.filter(el => {
    return el.image !== null
  })
  // takes length of temp arr and finds remainder
  // uses this to "fill" the rest of array to multiple of 5
  let filler = 5 - (tempImageInfo.length % 5);
  // fills the array out with null data
  for (let index = 0; index < filler; index++) {
    let fillerData = {
      name: null,
      image: null,
      media: null,
      description: null,
      poster: null,
      link: null
    }
    tempImageInfo.push(fillerData);
  }
  res.render("images", { images: tempImageInfo });
};
