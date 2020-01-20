const express = require("express");

const app = express();

const port = process.env.port || 3010;

app.use(express.json());


// USING THE EXPRESS JS ROUTES TO CREATE THE ROUTES

app.listen(port, () => {
  console.log("[App listening on port : " + port + "]");
});

// INTEGRATING MONGODB

// New change