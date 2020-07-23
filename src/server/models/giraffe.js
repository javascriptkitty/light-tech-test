const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GiraffeSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  weight: { type: String, required: true },
  height: { type: String, required: true },
  photo: String,
  color: String,
  diet: String,
  character: String,

  created: {
    type: Date,
    default: Date.now,
  },
});

const Giraffe = mongoose.model("Giraffe", GiraffeSchema, "giraffes");

module.exports = {
  Giraffe,
};
