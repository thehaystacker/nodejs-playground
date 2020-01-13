const express = require("express");

const app = express();

const port = process.env.port || 3010;

app.use(express.json());

app.post("/", (req, res) => {
  res.send(req.body);
});

app.post("/blog", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log("[App listening on port : " + port + "]");
});
