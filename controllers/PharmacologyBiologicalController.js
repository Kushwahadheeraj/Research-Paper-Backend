const PharmacologyBiological = require("../models/PharmacologyBiologicalModel.js");
const mongoose = require("mongoose");

const getOnePharmacology = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await PharmacologyBiological.findById(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologys = async (req, res, next) => {
  try {
    const pharmacologys = await PharmacologyBiological.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addPharmacology = async (req, res, next) => {
  const pharmacology = new PharmacologyBiological({
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
    await PharmacologyBiological.deleteOne({ _id: id });
    res.status(200).json({ message: "Pharmacology Biological deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacology = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  mongoose.set('useFindAndModify', false);
  PharmacologyBiological.findByIdAndUpdate(
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
          .json({ message: "Pharmacology Biological updated successfully", pharmacology });
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
