const Statistics = require("../models/StatisticsModel.js");
const mongoose = require("mongoose");

const getOneStatistics = async (req, res, next) => {
  const id = req.params.statisticsId;
  try {
    const statistics = await Statistics.findById(id);
    res.status(200).json(statistics);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllStatistics = async (req, res, next) => {
  try {
    const pharmacologys = await Statistics.find({});
    res.status(200).json(pharmacologys);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addStatistics = async (req, res, next) => {
  const statistics = new Statistics({
    _id: new mongoose.Types.ObjectId(),
    sn: req.body.sn,
    statisticsName: req.body.statisticsName,
    totalNumber: req.body.totalNumber,
  });

  try {
    await statistics.save();
    res.status(201).json(statistics);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteStatistics = async (req, res, next) => {
  const id = req.params.statisticsId;
  try {
    await Statistics.deleteOne({ _id: id });
    res.status(200).json({ message: "Statistics deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateStatistics = async (req, res, next) => {
  const id = req.params.statisticsId;
  mongoose.set('useFindAndModify', false);
  Statistics.findByIdAndUpdate(
    id,
    {
      sn: req.body.sn,
      statisticsName: req.body.statisticsName,
      totalNumber: req.body.totalNumber,
    },
    function (err, statistics) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Statistics updated successfully", statistics });
      }
    }
  );
};

module.exports = {
  getOneStatistics,
  getAllStatistics,
  addStatistics,
  deleteStatistics,
  updateStatistics,
};
