const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/task", (req, res) => {
  res.json({ message: "Your task is completed" });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
