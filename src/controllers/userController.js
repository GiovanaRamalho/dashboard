import express from "express";
import User from "../models/Users.js";

export default {
  createUser: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
