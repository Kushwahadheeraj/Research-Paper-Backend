const Bajra = require("../models/BajraModel.js");
const mongoose = require("mongoose");




const getOneBajra = async (req, res, next) => {
  const id = req.params.bajraId;
  try {
    const bajra = await Bajra.findById(id);
    res.status(200).json(bajra);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllBajras = async (req, res, next) => {
  try {
    const bajras = await Bajra.find({});
    res.status(200).json(bajras);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addBajra = async (req, res, next) => {
  const bajra = new Bajra({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
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
    await bajra.save();
    res.status(201).json(bajra);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateBajra = async (req, res, next) => {
  const id = req.params.bajraId;
  mongoose.set("useFindAndModify", false);
  Bajra.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
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
    function (err, bajra) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Bajra updated successfully",
          bajra: bajra,
        });
      }
    }
  );
};

const deleteBajra = async (req, res, next) => {
  const id = req.params.bajraId;
  try {
    await Bajra.deleteOne({ _id: id });
    res.status(200).json({ message: "Bajra deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneBajra,
  getAllBajras,
  addBajra,
  deleteBajra,
  updateBajra,
};
