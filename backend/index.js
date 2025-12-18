const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/task", (req, res) => {
  console.log("Request aayi /task se");
  res.json({ message: "Your task is completed" });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
