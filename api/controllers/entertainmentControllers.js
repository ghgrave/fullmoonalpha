const {cardData} =  require("../../data/entertainment")

exports.displayEntertainmentPage = (req, res) => {
  res.render("entertainment", {cardData});
};


