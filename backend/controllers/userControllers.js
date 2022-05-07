const User = require("../models/userModel");

// @desc    Get Users
// @route   GET /api/users

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

// @desc Get User by Email
// @route GET /api/users/:email

const getUser = async (req, res) => {
  const user = await User.findOne({ email: req.params.email });

  if (!user) {
    res.status(200).json({ message: "User not found" });
    return;
  }

  res.status(200).json(user);
};

// @desc    Create Users
// @route   POST /api/users

const createUsers = async (req, res) => {
  const user = await User.create({
    email: req.body.email,
    avatar: req.body.avatar,
    password: req.body.password,
    repeatPassword: req.body.repeatPassword,
    sex: req.body.sex,
    registeredAt: req.body.registeredAt,
  });

  res.status(200).json({ message: `User "${req.params.email}" created` });
};

// @desc    Edit Users
// @route   PUT /api/users/:email

const editUsers = async (req, res) => {
  const user = await User.updateOne(
    { email: req.params.email },
    { $set: req.body }
  );

  if (!user.modifiedCount) {
    res.status(200).json({ edited: 0 });
    return;
  }
  res.status(200).json({ edited: 1 });
};

// @desc    Delete Users
// @route   Delete /api/users/:email

const deleteUsers = async (req, res) => {
  const user = await User.collection.findOneAndDelete({
    email: req.params.email,
  });
  if (!user.ok) {
    res.status(200).json({ deleted: 0 });
    return;
  }
  res.status(200).json({ deleted: 1 });
};

module.exports = {
  getUser,
  getUsers,
  editUsers,
  createUsers,
  deleteUsers,
};
