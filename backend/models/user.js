const mongoose = require("mongoose");

// Create a Schema for Users
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  role:{
    type:String,
    required:true,
    enum:['vendors','company','user'],
    default : 'user',
  },
  waste: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Waste",
    },
  ],
  eWaste: {
    type: Number,
    default: 0,
  },
  dryWaste: {
    type: Number,
    default: 0,
  },
  wetWaste: {
    type: Number,
    default: 0,
  },
  earnings: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  dustbin: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bin",
    },
  ],
});

// Create a model from the schema
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
