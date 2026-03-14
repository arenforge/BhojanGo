require("dotenv").config();
require("./db");
const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});