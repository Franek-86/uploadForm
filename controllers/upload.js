const customErrors = require("../errors/index");
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary");
// const uploadProductLocal = (req, res) => {
//   const file = req.files.image;
//   if (!req.files) {
//     throw new customErrors.BadRequest("please upload a file");
//   }
//   if (!req.files.image.mimetype.startsWith("image")) {
//     throw new customErrors.BadRequest("please upload an image");
//   }
//   let maxSize = 1024 * 1024;

//   if (req.files.image.size > maxSize) {
//     throw new customErrors.BadRequest("please upload lower size file");
//   }
//   const filePath = path.join(__dirname, "../public/uploads/" + `${file.name}`);
//   file.mv(filePath);
//   res.status(200).json({ image: { src: `/uploads/${file.name}` } });
// };

const uploadProduct = async (req, res) => {
  const file = req.files.image;
  console.log(file);
  const test = await cloudinary.v2.uploader.upload(file.tempFilePath, {
    folder: "ciao",
  });

  fs.unlinkSync(file.tempFilePath);
  res.status(200).json({ image: { src: test.secure_url } });
};
module.exports = { uploadProduct };
