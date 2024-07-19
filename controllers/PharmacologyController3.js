const Pharmacology4 = require("../models/PharmacologyModel3.js");
const mongoose = require("mongoose");

const getOnePharmacology = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  try {
    const pharmacology = await Pharmacology4.findById(id);
    res.status(200).json(pharmacology);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllPharmacologys = async (req, res, next) => {
  try {
    const pharmacologys = await Pharmacology4.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addPharmacology = async (req, res, next) => {
  const pharmacology = new Pharmacology4({
    _id: new mongoose.Types.ObjectId(),
    Plants:req.body.Plants,
    Anticancerous: req.body.Anticancerous,
  Antibacterial: req.body.Antibacterial,
  Antifungal: req.body.Antifungal,
  Antiinflammattory: req.body.Antiinflammattory,
  Antioxidant: req.body.Antioxidant,
  Antidiabetic: req.body.Antidiabetic,
  Antiprotozons: req.body.Antiprotozons,
  Antiallergic: req.body.Antiallergic,
  Anticonvulsant: req.body.Anticonvulsant,
  Anticoagulant: req.body.Anticoagulant,
  Antiulcer: req.body.Antiulcer,
  Antiaging: req.body.Antiaging,
  Antiobesity: req.body.Antiobesity,
  Antianxiety: req.body.Antianxiety,
  Antiinfectious: req.body.Antiinfectious,
  Antidepressive: req.body. Antidepressive,
  Antiosteoporosis: req.body.Antiosteoporosis,
  Antineoplastic: req.body.Antineoplastic,
  Antialgal: req.body.Antialgal,
  Antigastritic: req.body.Antigastritic,
  Antimigraine: req.body.Antimigraine,
  Antispasmodic: req.body.Antispasmodic,
  Antipsychotic: req.body. Antipsychotic,
  Antiadipogenic: req.body.Antiadipogenic,
  Antiestrogenic: req.body.Antiestrogenic,
  Antiinsecticide: req.body.Antiinsecticide,
  Antiproliferative: req.body.Antiproliferative,
  Antihypertensive: req.body. Antihypertensive,
  Antiamyloidogenic: req.body.Antiamyloidogenic,
  Antiarthritic: req.body.Antiarthritic,
  Antiplateletaggregating: req.body.Antiplateletaggregating,
  Antisickling: req.body.Antisickling,
  Antimelanogenesis:req.body.Antimelanogenesis,
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
    await Pharmacology4.deleteOne({ _id: id });
    res.status(200).json({ message: "Pharmacology4 deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updatePharmacology = async (req, res, next) => {
  const id = req.params.pharmacologyId;
  mongoose.set('useFindAndModify', false);
  Pharmacology4.findByIdAndUpdate(
    id,
    {
      Plants:req.body.Plants,
      Anticancerous: req.body.Anticancerous,
      Antibacterial: req.body.Antibacterial,
      Antifungal: req.body.Antifungal,
      Antiinflammattory: req.body.Antiinflammattory,
      Antioxidant: req.body.Antioxidant,
      Antidiabetic: req.body.Antidiabetic,
      Antiprotozons: req.body.Antiprotozons,
      Antiallergic: req.body.Antiallergic,
      Anticonvulsant: req.body.Anticonvulsant,
      Anticoagulant: req.body.Anticoagulant,
      Antiulcer: req.body.Antiulcer,
      Antiaging: req.body.Antiaging,
      Antiobesity: req.body.Antiobesity,
      Antianxiety: req.body.Antianxiety,
      Antiinfectious: req.body.Antiinfectious,
      Antidepressive: req.body. Antidepressive,
      Antiosteoporosis: req.body.Antiosteoporosis,
      Antineoplastic: req.body.Antineoplastic,
      Antialgal: req.body.Antialgal,
      Antigastritic: req.body.Antigastritic,
      Antimigraine: req.body.Antimigraine,
      Antispasmodic: req.body.Antispasmodic,
      Antipsychotic: req.body. Antipsychotic,
      Antiadipogenic: req.body.Antiadipogenic,
      Antiestrogenic: req.body.Antiestrogenic,
      Antiinsecticide: req.body.Antiinsecticide,
      Antiproliferative: req.body.Antiproliferative,
      Antihypertensive: req.body. Antihypertensive,
      Antiamyloidogenic: req.body.Antiamyloidogenic,
      Antiarthritic: req.body.Antiarthritic,
      Antiplateletaggregating: req.body.Antiplateletaggregating,
      Antisickling: req.body.Antisickling,
      Antimelanogenesis:req.body.Antimelanogenesis,
    },
    function (err, pharmacology) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Pharmacology4 updated successfully", pharmacology });
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
