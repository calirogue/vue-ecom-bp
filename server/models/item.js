const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  designer: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  style: {
    type: String
  },
  price: {
    type: Number
  }
}, {
  toJSON: {
    transform: (doc, { _id, title, designer, image, style, price }) =>
      ({ id: _id, title, designer, image, style, price })
  }
});

module.exports = mongoose.model("Item", ItemSchema);
