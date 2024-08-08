const express = require("express");
const { Requirement } = require("../models/marketplace");
const { User } = require("../models/user");
const { authMiddleware } = require("../middlewares/userAuth");
const requirementRouter = express.Router();

// requirementRouter.post("/input", authMiddleware, async (req, res) => {

//   try {
//     const newReq = await Requirement.create({
//       volume: req.body.volume,
//       type: req.body.type,
//     });
//     res.json({
//       msg: "Requirement added",
//     });
//   } catch (err) {
//     console.error("Error creating requirement:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// Route to create a new requirement
requirementRouter.post("/create", authMiddleware, async (req, res) => {
  try {
    const { volume, type, ppv } = req.body;
    const userId = req.userId;

    // Fetch user name from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new requirement instance
    const newRequirement = new Requirement({
      volume,
      type,
      ppv,
      user: [],
      org: userId, // Initialize org field to null
      orgName: user.username, // Set orgName to user's username
    });

    // Save the new requirement to the database
    await newRequirement.save();

    res.status(201).json(newRequirement);
  } catch (error) {
    console.error("Error creating requirement:", error);
    res.status(500).json({ message: "Error creating requirement" });
  }
});

requirementRouter.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const requirements = await Requirement.find({
    type: {
      $regex: filter,
    },
  });

  res.json({
    requirements: requirements.map((requirement) => ({
      type: requirement.type,
      volume: requirement.volume,
      _id: requirement._id,
      orgName: requirement.orgName,
      ppv: requirement.ppv,
    })),
  });
});

requirementRouter.put("/sell", authMiddleware, async (req, res) => {
  const reqId = req.body.reqId;
  const userId = req.userId;

  try {
    // Find the requirement based on reqId
    const requirement = await Requirement.findOne({ _id: reqId });

    // Find the user based on userId
    const user = await User.findById(userId);
    const org = await User.findById(requirement.org);

    // Check if requirement or user not found
    if (!requirement || !user) {
      return res
        .status(404)
        .json({ error: `User or Requirement not found ${reqId}${userId}` });
    }

    let message = "Not enough waste!";

    // Check if the user has exactly enough waste to fulfill the requirement
    if (requirement.type === "ewaste" && user.eWaste >= requirement.volume) {
      user.earnings += requirement.volume * requirement.ppv;
      user.recycled += requirement.volume;
      org.eWaste += requirement.volume;
      org.volume += requirement.volume;
      user.eWaste -= requirement.volume;
      requirement.volume = 0; // Set requirement volume to 0
      message = "Waste sold";
    } else if (
      requirement.type === "drywaste" &&
      user.dryWaste >= requirement.volume
    ) {
      user.earnings += requirement.volume * requirement.ppv;
      user.recycled += requirement.volume;
      user.dryWaste -= requirement.volume;
      org.dryWaste += requirement.volume;
      org.volume += requirement.volume;
      requirement.volume = 0; // Set requirement volume to 0
      message = "Waste sold";
    } else if (
      requirement.type === "wetwaste" &&
      user.wetWaste >= requirement.volume
    ) {
      user.earnings += requirement.volume * requirement.ppv;
      user.recycled += requirement.volume;
      user.wetWaste -= requirement.volume; // Subtract requirement volume from user's waste
      org.wetWaste += requirement.volume;
      org.volume += requirement.volume;
      requirement.volume = 0; // Set requirement volume to 0
      message = "Waste sold";
    }

    // Check if the user has some waste but not enough to fulfill the entire requirement
    else if (
      requirement.type == "ewaste" &&
      user.eWaste < requirement.volume &&
      user.eWaste > 0
    ) {
      user.earnings += user.eWaste * requirement.ppv;
      user.recycled += user.eWaste;
      requirement.volume -= user.eWaste;
      org.eWaste += user.eWaste;
      org.volume += user.eWaste;
      user.eWaste = 0;
      message = "Partial waste sold";
    } else if (
      requirement.type === "drywaste" &&
      user.dryWaste < requirement.volume &&
      user.dryWaste > 0
    ) {
      user.earnings += user.dryWaste * requirement.ppv;
      user.recycled += user.dryWaste;
      requirement.volume -= user.dryWaste;
      org.dryWaste += user.dryWaste;
      org.volume += user.dryWaste;
      user.dryWaste = 0;
      message = "Partial waste sold";
    } else if (
      requirement.type === "wetwaste" &&
      user.wetWaste < requirement.volume &&
      user.wetWaste > 0
    ) {
      user.earnings += user.wetWaste * requirement.ppv;
      user.recycled += user.wetWaste;
      requirement.volume -= user.wetWaste;
      org.wetWaste += user.wetWaste;
      org.volume += user.wetWaste;
      user.wetWaste = 0;
      message = "Partial waste sold";
    }

    // Save the updated user document
    await user.save();
    await org.save();

    // Push the userId to the user array of the requirements
    await Requirement.updateOne({ _id: reqId }, { $push: { user: userId } });

    // Check if requirement volume is zero or less, then delete
    if (requirement.volume <= 0) {
      await Requirement.deleteOne({ _id: requirement._id });
    } else {
      // Save the updated requirement document
      await requirement.save();
    }

    // Send the response
    return res.json({ msg: message });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = requirementRouter;
