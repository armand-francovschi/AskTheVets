// index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");
const articleRoutes = require("./routes/articles");
console.log("ARTICLE ROUTES TYPE:", typeof articleRoutes);
console.log("ARTICLE ROUTES:", articleRoutes);


dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
