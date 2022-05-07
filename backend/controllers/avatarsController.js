const Avatars = require("../models/avatarModel");

// @desc    Get Avatars
// @route   GET /avatars

const getAvatars = async (req, res) => {
  const avatars = await Avatars.find();
  res.status(200).json(avatars);
};

// @desc    Create Avatars
// @route   POST /avatars

const createAvatar = async (req, res) => {
  const avatar = await Avatars.create({
    name: req.body.name,
    holder: req.body.holder,
  });
  res.status(200).json(avatar);
};

// @desc    Edit Avatars
// @route   PUT /avatars

const editAvatar = async (req, res) => {
  const avatar = await Avatars.updateOne(
    { holder: req.body.holder },
    { $set: req.body }
  );
  res.status(200).json(avatar);
};

// @desc    Delete Avatars
// @route   DELETE /avatars

const deleteAvatar = async (req, res) => {
  const avatar = await Avatars.findOneAndDelete({ holder: req.body.holder });
  res.status(200).json(avatar);
};

module.exports = { getAvatars, createAvatar, editAvatar, deleteAvatar };
