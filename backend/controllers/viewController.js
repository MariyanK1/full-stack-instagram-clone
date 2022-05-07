const path = require("path");

// @desc    Load the main view files
// @route   GET /

const viewController = (req, res) => {
  res.sendFile(path.join(__dirname + "../../../public/index.html"));
};

module.exports = viewController;
