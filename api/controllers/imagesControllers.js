const cloudinary = require("../services/cloudinaryConnection");

exports.displayImagesPage = (req, res) => {
  let cloudArr = [];
  cloudinary.v2.search
    .expression(req.query.q ? `tags=${req.query.q}` : null)
    .aggregate()
    .execute()
    .then((result) => {
      result.resources.forEach((el) => {
        let tempObj = {
          name: el.filename,
          image: el.secure_url,
          media: null,
          description: null,
          poster: null,
          link: null,
        };
        cloudArr.push(tempObj);
      });
      return cloudArr;
    })
    .then((data) => {
      // takes length of temp arr and finds remainder
      // uses this to "fill" the rest of array to multiple of 5
      let filler = 5 - (cloudArr.length % 5);
      // fills the array out with null data
      for (let index = 0; index < filler; index++) {
        let fillerData = {
          name: null,
          image: null,
          media: null,
          description: null,
          poster: null,
          link: null,
        };
        data.push(fillerData);
      }
      res.render("images", { images: data });
    })
    .catch((err) => res.render("error"));
};
