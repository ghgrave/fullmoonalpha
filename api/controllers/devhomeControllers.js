const controls = require('../../data/devImageFormData')

exports.displayHomePage = (req, res) => {
  res.render("devhome", {controls});
};