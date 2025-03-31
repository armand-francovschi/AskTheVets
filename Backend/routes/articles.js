const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all articles
router.get("/", (req, res) => {
  db.query("SELECT * FROM articles ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// POST new article
router.post("/", (req, res) => {
  const { title, excerpt, content, imageUrl, category } = req.body;
  const sql = `INSERT INTO articles (title, excerpt, content, imageUrl, category)
               VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [title, excerpt, content, imageUrl, category], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Article created", id: result.insertId });
  });
});

// PUT update article
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, excerpt, content, imageUrl, category } = req.body;
  const sql = `UPDATE articles SET title=?, excerpt=?, content=?, imageUrl=?, category=? WHERE id=?`;
  db.query(sql, [title, excerpt, content, imageUrl, category, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Article updated" });
  });
});

// DELETE article
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM articles WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Article deleted" });
  });
});

module.exports = router; // ✅ ✅ ✅ This line is what fixes it
