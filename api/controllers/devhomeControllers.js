const controls = require('../../data/devImageFormData')

exports.displayHomePage = (req, res) => {
  res.render("devhome", {controls});
};

exports.uploadImage = (req, res) => {
  console.log("So far so good")
}