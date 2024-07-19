const mongoose = require("mongoose");

const statisticsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn:{type:Number,required:true},
  statisticsName: { type: String, required: true },
  totalNumber: { type: Number, required: true },
});

module.exports = mongoose.model("Statistics",statisticsSchema);