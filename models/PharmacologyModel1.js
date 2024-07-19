const mongoose = require("mongoose");

const pharmacologySchema2 = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn:{type:Number,required:true},
  compoundName: { type: String, required: true },
  cid: { type: String, required: true },
  pharmacologyActivity: { type: String, required: true },
});

module.exports = mongoose.model("Pharmacology2",pharmacologySchema2);