const Ragi = require("../models/RagiModel.js");
const mongoose = require("mongoose");




const getOneRagi = async (req, res, next) => {
  const id = req.params.ragiId;
  try {
    const ragi = await Ragi.findById(id);
    res.status(200).json(ragi);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllRagis = async (req, res, next) => {
  try {
    const ragis = await Ragi.find({});
    res.status(200).json(ragis);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addRagi = async (req, res, next) => {
  const ragi = new Ragi({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    name: req.body.name,
    commonName: req.body.commonName,
    cid: req.body.cid,
    commonNameMetabolite: req.body.commonNameMetabolite,
    IUPACNameMetabolite: req.body.IUPACNameMetabolite,
  });
  try {
    await ragi.save();
    res.status(201).json(ragi);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateRagi = async (req, res, next) => {
  const id = req.params.ragiId;
  mongoose.set("useFindAndModify", false);
  Ragi.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      name: req.body.name,
      commonName: req.body.commonName,
      cid: req.body.cid,
      commonNameMetabolite: req.body.commonNameMetabolite,
      IUPACNameMetabolite: req.body.IUPACNameMetabolite,
    },
    function (err, ragi) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Ragi updated successfully",
          ragi: ragi,
        });
      }
    }
  );
};

const deleteRagi = async (req, res, next) => {
  const id = req.params.ragiId;
  try {
    await Ragi.deleteOne({ _id: id });
    res.status(200).json({ message: "Ragi deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneRagi,
  getAllRagis,
  addRagi,
  deleteRagi,
  updateRagi,
};
