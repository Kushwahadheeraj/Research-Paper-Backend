const mongoose = require("mongoose");

const maizeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sn:{type:Number,required:true},
  name: { type: String, required: true },
  commonName: { type: String, required: true },
  cid: { type: String, required: true },
  commonNameMetabolite: { type: String, required: true },
  IUPACNameMetabolite: { type: String, required: true },
  molecularName: { type: String, required: true },
  molecularFormula: { type: String, required: true },
  canonicalSmiles: { type: String, required: true },
  references: { type: String, required: true },
  superClass: { type: String, required: true },
  class: { type: String, required: true },
});

module.exports = mongoose.model("Maize", maizeSchema);

