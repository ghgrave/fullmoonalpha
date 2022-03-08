const controls = require("../../data/devImageFormData");
const cloudinary = require("../services/cloudinaryConnection");
const formidable = require("formidable");

exports.displayHomePage = (req, res) => {
  res.render("devhome", { controls });
};

exports.uploadImage = (req, res) => {
  // parse a file upload
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    let tags = fields.customName.toLowerCase().split(" ");
    for (attr in fields) {
      if (attr !== "customName" && attr !== "browserUrl" && attr !== "textDescriptions"){
        tags.push(attr)
      };
      if(attr === "textDescriptions"){
        fields[attr].split(",").forEach(el => tags.push(el.toLowerCase()))
      }
    }

    cloudinary.v2.uploader.upload(
      !fields.browserUrl ? files.upload.filepath : fields.browserUrl,
      { public_id: fields.customName, tags: tags },
      (error, result) => {
        console.log(result)
        if (result.public_id) {
          res.redirect("/devs");
        }
        res.send(error)
      }
    );
  });
};
