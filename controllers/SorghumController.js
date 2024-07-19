const Sorghum = require("../models/SorghumModel.js");
const mongoose = require("mongoose");

const getOneSorghum = async (req, res, next) => {
  const id = req.params.sorghumId;
  try {
    const sorghum = await Sorghum.findById(id);
    res.status(200).json(sorghum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllSorghums = async (req, res, next) => {
  try {
    const sorghums = await Sorghum.find({});
    res.status(200).json(sorghums);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addSorghum = async (req, res, next) => {
  const sorghum = new Sorghum({
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
    await sorghum.save();
    res.status(201).json(sorghum);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteSorghum = async (req, res, next) => {
  const id = req.params.sorghumId;
  try {
    await Sorghum.deleteOne({ _id: id });
    res.status(200).json({ message: "Sorghum deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateSorghum = async (req, res, next) => {
  const id = req.params.sorghumId;
  mongoose.set('useFindAndModify', false);
  Sorghum.findByIdAndUpdate(
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
    function (err, sorghum) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Sorghum updated successfully", sorghum });
      }
    }
  );
};

module.exports = {
  getOneSorghum,
  getAllSorghums,
  addSorghum,
  deleteSorghum,
  updateSorghum,
};