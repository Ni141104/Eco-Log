// backend/routes/user.js
const express = require("express");

const userRouter = express.Router();
const zod = require("zod");
const { User } = require("../models/user.js");
const { Bin } = require("../models/bin.js");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const { authMiddleware } = require("../middlewares/userAuth.js");

const signupBody = zod.object({
  username: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
  role: zod.string(),
});

const updateBody = zod.object({
  password: zod.string().optional(),
  username: zod.string().optional(),
});

userRouter.get("/getinfo", authMiddleware, async (req, res) => {
  const userId = req.userId;

  const user = await User.findOne({
    _id: userId,
  });

  if (!user) {
    res.json({
      msg: "User not found",
    });
  } else {
    console.log(user);
    res.json(user);
  }
});

userRouter.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    email: req.body.email,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
  });
  const userId = user._id;

  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
});

const signinBody = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

userRouter.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }

  res.status(400).json({
    message: "Error while logging in",
  });
});

userRouter.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne({ _id: req.userId }, req.body);

  res.json({
    message: "Updated successfully",
  });
});

userRouter.get("/dustbins", authMiddleware, async (req, res) => {
  try {
    // Find all dustbins associated with the current user
    const userId = req.userId;
    const dustbins = await Bin.find({ user: userId });

    res.status(200).json({ dustbins });
  } catch (error) {
    console.error("Error fetching user's dustbins:", error);
    res.status(500).json({ message: "Error fetching user's dustbins" });
  }
});

module.exports = userRouter;
