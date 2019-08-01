const mongoose = require("mongoose");

const SortSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image:{
    type: String,
    required: false
  },
  type: {
    type: String,
    required: true
  },
  cbd: {
    type: Number,
    required: true
  },
  thc: {
    type: Number,
    required: true
  },
  effects: {
    type: Array,
    required: false
  },
  flavor: {
    type: Array,
    required: false
  },
  deleted:{
    type: Boolean,
    default: false
  }
}, {
  toJSON: {
    transform: (doc, { _id, name, description, image, type, cbd, thc, effects, flavor, deleted }) =>
      ({ id: _id, name, description, image, type, cbd, thc, effects, flavor, deleted })
  }
});

module.exports = mongoose.model("Sort", SortSchema);
