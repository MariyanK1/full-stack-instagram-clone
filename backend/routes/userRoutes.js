const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUsers,
  editUsers,
  deleteUsers,
  getUser,
} = require("../controllers/userControllers");

router.route("/").get(getUsers).post(createUsers);
router.route("/:email").put(editUsers).delete(deleteUsers).get(getUser);

module.exports = router;
