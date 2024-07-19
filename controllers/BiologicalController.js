const Biological = require("../models/PharmacologyModel.js");
const mongoose = require("mongoose");

const getOneBiological = async (req, res, next) => {
  const id = req.params.biologicalId;
  try {
    const biological = await Biological.findById(id);
    res.status(200).json(biological);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllBiologicals = async (req, res, next) => {
  try {
    const biologicals = await Biological.find({});
    res.status(200).json(biologicals);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addBiological = async (req, res, next) => {
  const biological = new Biological({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    compoundName: req.body.compoundName,
    cid: req.body.cid,
    biologicalActivity: req.body.biologicalActivity,
  });

  try {
    await biological.save();
    res.status(201).json(biological);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteBiological = async (req, res, next) => {
  const id = req.params.biologicalId;
  try {
    await Biological.deleteOne({ _id: id });
    res.status(200).json({ message: "Biological deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateBiological = async (req, res, next) => {
  const id = req.params.biologicalId;
  mongoose.set('useFindAndModify', false);
  Biological.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      compoundName: req.body.compoundName,
      cid: req.body.cid,
      biologicalActivity: req.body.biologicalActivity,
    },
    function (err, biological) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Biological updated successfully", biological });
      }
    }
  );
};

module.exports = {
  getOneBiological,
  getAllBiologicals,
  addBiological,
  deleteBiological,
  updateBiological,
};
