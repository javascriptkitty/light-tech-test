const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GiraffeSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  gender: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  photo: String,
  color: String,
  diet: String,
  character: String,

  created: {
    type: Date,
    default: Date.now,
  },
});

const Giraffe = mongoose.model("Giraffe", GiraffeSchema);

module.exports = {
  Giraffe,
};
