const Barley = require("../models/BarleyModel.js");
const mongoose = require("mongoose");




const getOneBarley = async (req, res, next) => {
  const id = req.params.barleyId;
  try {
    const barley = await Barley.findById(id);
    res.status(200).json(barley);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllBarleys = async (req, res, next) => {
  try {
    const barleys = await Barley.find({});
    res.status(200).json(barleys);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};



const addBarley = async (req, res, next) => {
  const barley = new Barley({
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
    await barley.save();
    res.status(201).json(barley);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateBarley = async (req, res, next) => {
  const id = req.params.barleyId;
  mongoose.set("useFindAndModify", false);
  Barley.findByIdAndUpdate(
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
    function (err, barley) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Barley updated successfully",
          barley: barley,
        });
      }
    }
  );
};

const deleteBarley = async (req, res, next) => {
  const id = req.params.barleyId;
  try {
    await Barley.deleteOne({ _id: id });
    res.status(200).json({ message: "Barley deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneBarley,
  getAllBarleys,
  addBarley,
  deleteBarley,
  updateBarley,
};
