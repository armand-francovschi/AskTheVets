// routes/auth.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

// Register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, existing) => {
    if (err) return res.status(500).json({ error: err.message });
    if (existing.length > 0) return res.status(400).json({ error: "Email already registered" });

    db.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, 'user')",
      [name, email, hashed],
      (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User registered successfully" });
      }
    );
  });
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err || results.length === 0)
      return res.status(401).json({ error: "Invalid credentials" });

    const user = results[0];
    const match = bcrypt.compareSync(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);
    res.json({
      token,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  });
});

module.exports = router; // ✅ THIS is the most important line
