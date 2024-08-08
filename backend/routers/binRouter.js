const express = require("express");
const binRouter = express.Router();
const { authMiddleware } = require("../middlewares/userAuth");
const { Bin } = require("../models/bin");
const { User } = require("../models/user");

// POST route to input bin data
binRouter.post("/input", authMiddleware, async (req, res) => {
  try {
    // Extract bin data from req.body
    const { location, capacity, type } = req.body;
    const userId = req.userId;

    // Create a new bin instance
    const newBin = new Bin({
      location,
      user: userId,
      capacity,
      type,
    });

    // Save the new bin to the database
    await newBin.save();

    await User.findByIdAndUpdate(
      userId,
      { $push: { dustbin: newBin._id } },
      { new: true }
    );

    res.status(201).json({
      userId,
      binId: newBin._id,
    });
  } catch (error) {
    console.error("Error inputting bin:", error);
    res.status(500).json({ message: "Error inputting bin" });
  }
});

module.exports = binRouter;
