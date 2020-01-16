const express = require("express");

const app = express();

const port = process.env.port || 3010;

app.use(express.json());


app.listen(port, () => {
  console.log("[App listening on port : " + port + "]");
});


// New changes