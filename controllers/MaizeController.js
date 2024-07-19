const Maize = require("../models/MaizeModel.js");
const mongoose = require("mongoose");

const getOneMaize = async (req, res, next) => {
  const id = req.params.maizeId;
  try {
    const maize = await Maize.findById(id);
    res.status(200).json(maize);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllMaizes = async (req, res, next) => {
  try {
    const maizes = await Maize.find({});
    res.status(200).json(maizes);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addMaize = async (req, res, next) => {
  const maize = new Maize({
    _id: new mongoose.Types.ObjectId(),
  sn:req.body.sn,
  name: req.body.name,
  commonName: req.body.commonName,
  cid: req.body.cid,
  commonNameMetabolite: req.body.commonNameMetabolite,
  IUPACNameMetabolite: req.body.IUPACNameMetabolite,
  molecularName: req.body.molecularName,
  molecularFormula: req.body.molecularFormula,
  canonicalSmiles: req.body.canonicalSmiles,
  references: req.body.references,
  superClass: req.body.superClass,
  class: req.body.class,
  });

  try {
    await maize.save();
    res.status(201).json(maize);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteMaize = async (req, res, next) => {
  const id = req.params.maizeId;
  try {
    await Maize.deleteOne({ _id: id });
    res.status(200).json({ message: "Maize deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateMaize = async (req, res, next) => {
  const id = req.params.maizeId;
  mongoose.set('useFindAndModify', false);
  Maize.findByIdAndUpdate(
    id,
    {
      sn:req.body.sn,
      name: req.body.name,
      commonName: req.body.commonName,
      cid: req.body.cid,
      commonNameMetabolite: req.body.commonNameMetabolite,
      IUPACNameMetabolite: req.body.IUPACNameMetabolite,
      molecularName: req.body.molecularName,
      molecularFormula: req.body.molecularFormula,
      canonicalSmiles: req.body.canonicalSmiles,
      references: req.body.references,
      superClass: req.body.superClass,
      class: req.body.class,
    },
    function (err, maize) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Maize updated successfully", maize });
      }
    }
  );
};

module.exports = {
  getOneMaize,
  getAllMaizes,
  addMaize,
  deleteMaize,
  updateMaize,
};
