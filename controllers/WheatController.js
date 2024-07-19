const Wheat = require("../models/WheatModel.js");
const mongoose = require("mongoose");

const getOneWheat = async (req, res, next) => {
  const id = req.params.wheatId;
  try {
    const wheat = await Wheat.findById(id);
    res.status(200).json(wheat);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllWheats = async (req, res, next) => {
  try {
    const wheats = await Wheat.find({});
    res.status(200).json(wheats);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addWheat = async (req, res, next) => {
  const wheat = new Wheat({
    _id: new mongoose.Types.ObjectId(),
  sn:req.body.sn,
  name: req.body.name,
  commonName: req.body.commonName,
  cid: req.body.cid,
  commonNameMetabolite: req.body.commonNameMetabolite,
  IUPACNameMetabolite: req.body.IUPACNameMetabolite,
  molecularWeight: req.body.molecularWeight,
  molecularFormula: req.body.molecularFormula,
  canonicalSmiles: req.body.canonicalSmiles,
  references: req.body.references,
  superClass: req.body.superClass,
  class: req.body.class,
  });

  try {
    await wheat.save();
    res.status(201).json(wheat);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteWheat = async (req, res, next) => {
  const id = req.params.wheatId;
  try {
    await Wheat.deleteOne({ _id: id });
    res.status(200).json({ message: "Wheat deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateWheat = async (req, res, next) => {
  const id = req.params.wheatId;
  mongoose.set('useFindAndModify', false);
  Wheat.findByIdAndUpdate(
    id,
    {
      sn:req.body.sn,
      name: req.body.name,
      commonName: req.body.commonName,
      cid: req.body.cid,
      commonNameMetabolite: req.body.commonNameMetabolite,
      IUPACNameMetabolite: req.body.IUPACNameMetabolite,
      molecularWeight: req.body.molecularWeight,
      molecularFormula: req.body.molecularFormula,
      canonicalSmiles: req.body.canonicalSmiles,
      references: req.body.references,
      superClass: req.body.superClass,
      class: req.body.class,
    },
    function (err, wheat) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Wheat updated successfully", wheat });
      }
    }
  );
};

module.exports = {
  getOneWheat,
  getAllWheats,
  addWheat,
  deleteWheat,
  updateWheat,
};