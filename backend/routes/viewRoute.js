const express = require("express");
const viewRouter = express.Router();
const viewController = require("../controllers/viewController");

viewRouter.route("/").get(viewController);

module.exports = viewRouter;
