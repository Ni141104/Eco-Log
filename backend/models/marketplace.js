const mongoose = require("mongoose");

const requirementSchema = mongoose.Schema({
  volume: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  user: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    default: [],
  },
  org: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  orgName: {
    type: String,
  },
  ppv: {
    type: Number,
  },
});

const Requirement = mongoose.model("requirement", requirementSchema);

module.exports = {
  Requirement,
};
