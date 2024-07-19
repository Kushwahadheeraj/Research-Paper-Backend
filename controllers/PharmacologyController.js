const Pharmacology = require("../models/PharmacologyModel.js");
const mongoose = require("mongoose");

const getOnePharmacology = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await Pharmacology.findById(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologys = async (req, res, next) => {
  try {
    const pharmacologys = await Pharmacology.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addPharmacology = async (req, res, next) => {
  const pharmacology = new Pharmacology({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    compoundName: req.body.compoundName,
    cid: req.body.cid,
  });

  try {
    await pharmacology.save();
    res.status(201).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deletePharmacology = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    await Pharmacology.deleteOne({ _id: id });
    res.status(200).json({ message: "Pharmacology deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacology = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  mongoose.set('useFindAndModify', false);
  Pharmacology.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      compoundName: req.body.compoundName,
      cid: req.body.cid,
    },
    function (err, pharmacology) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Pharmacology updated successfully", pharmacology });
      }
    }
  );
};

module.exports = {
  getOnePharmacology,
  getAllPharmacologys,
  addPharmacology,
  deletePharmacology,
  updatePharmacology,
};
