const Rice = require("../models/RiceModel.js");
const mongoose = require("mongoose");




const getOneRice = async (req, res, next) => {
  const id = req.params.riceId;
  try {
    const rice = await Rice.findById(id);
    res.status(200).json(rice);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllRices = async (req, res, next) => {
  try {
    const rices = await Rice.find({});
    res.status(200).json(rices);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addRice = async (req, res, next) => {
  const rice = new Rice({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    name: req.body.name,
    commonName: req.body.commonName,
    cid: req.body.cid,
    commonNameMetabolite: req.body.commonNameMetabolite,
    IUPACNameMetabolite: req.body.IUPACNameMetabolite,
  });
  try {
    await rice.save();
    res.status(201).json(rice);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateRice = async (req, res, next) => {
  const id = req.params.riceId;
  mongoose.set("useFindAndModify", false);
  Rice.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      name: req.body.name,
      commonName: req.body.commonName,
      cid: req.body.cid,
      commonNameMetabolite: req.body.commonNameMetabolite,
      IUPACNameMetabolite: req.body.IUPACNameMetabolite,
    },
    function (err, rice) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Rice updated successfully",
          rice: rice,
        });
      }
    }
  );
};

const deleteRice = async (req, res, next) => {
  const id = req.params.riceId;
  try {
    await Rice.deleteOne({ _id: id });
    res.status(200).json({ message: "Rice deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneRice,
  getAllRices,
  addRice,
  deleteRice,
  updateRice,
};
