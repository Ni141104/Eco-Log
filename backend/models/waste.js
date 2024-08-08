const mongoose = require("mongoose");

// Define schema for Waste object
const wasteSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required:true,
  },
  volume: {
    type: Number,
    required: true,
  }
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
  // organisation: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

// Create Waste model
const Waste = mongoose.model("Waste", wasteSchema);

module.exports = Waste;
