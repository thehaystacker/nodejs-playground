const express = require("express");
require("./db/mongoose");
const modelUser = require("./models/user");

const app = express();
const port = process.env.port || 3010;

app.use(express.json());

// CREATING A TEST REQUEST
app.post("/user", (req, res) => {
  console.log("[req.body]", req.body);

  const User = new modelUser(req.body);

  User.save()
    .then(() => {
      console.log("[User record saved]");

      res.status(200).send({ success: true, data: User });
    })
    .catch(error => {
      console.log("[Error saving user record]", error.errors.age.message);

      res.status(500).send({ success: false });
    });
});

app.listen(port, () => {
  console.log("[App listening on port : " + port + "]");
});
