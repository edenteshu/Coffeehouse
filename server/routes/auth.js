const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, "secretkey", {
      expiresIn: "1h",
    });
    res.status(201).send({ token });
  } catch (error) {
    res.status(400).send({ error: "Email is already in use" });
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).send({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, "secretkey", {
      expiresIn: "1h",
    });
    res.send({ token });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = router;
