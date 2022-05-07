const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/posts");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

const uploadFile = upload.single("post");

const handler = (req, res) => {
  if (!req.file) throw new Error("Upload failed!");
  res.status(200).json({ upload: "successful" });
};

module.exports = { uploadFile, handler };
