const mongoose = require("mongoose");

const binSchema = mongoose.Schema({
  location: {
    type: String,
    default: "pune",
  },
  type: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  volume: {
    type: Number,
    default: 0,
  },
  capacity: {
    type: Number,
    default: 0,
  },
});

const Bin = mongoose.model("Bin", binSchema);

module.exports = {
  Bin,
};
