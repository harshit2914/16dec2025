const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

// Sabse simple CORS fix
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") return res.status(200).send();
  next();
});

app.get("/task", (req, res) => {
  console.log("✅ Morgan log: Request aayi!");
  res.json({ message: "Task completed" });
});

app.listen(3000, () => {
  console.log("Server running");
});



// const express = require("express");
// const morgan = require("morgan");
// const app = express();
// const cors = require("cors");
// app.use(morgan("dev"));
// app.use(cors());

// app.get("/task", (req, res) => {
//   console.log("Request aayi /task se");
//   res.json({ message: "Your task is completed" });
// });

// app.listen(3000, () => {
//   console.log("Backend running on port 3000");
// });



