const Pharmacology2 = require("../models/PharmacologyModel1.js");
const mongoose = require("mongoose");

const getOnePharmacology = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await Pharmacology2.findById(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologys = async (req, res, next) => {
  try {
    const pharmacologys = await Pharmacology2.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addPharmacology = async (req, res, next) => {
  const pharmacology = new Pharmacology2({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    compoundName: req.body.compoundName,
    cid: req.body.cid,
    pharmacologyActivity:req.body.pharmacologyActivity
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
    await Pharmacology2.deleteOne({ _id: id });
    res.status(200).json({ message: "Pharmacology2 deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacology = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  mongoose.set('useFindAndModify', false);
  Pharmacology2.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      compoundName: req.body.compoundName,
      cid: req.body.cid,
      pharmacologyActivity:req.body.pharmacologyActivity
    },
    function (err, pharmacology) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Pharmacology2 updated successfully", pharmacology });
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
