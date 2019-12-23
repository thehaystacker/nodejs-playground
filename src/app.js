const path = require("path");
const express = require("express");
const app = express();

const port = "4001";

const pathPublicDir = path.join(__dirname, "../public");
const pathViewsDir = path.join(__dirname, "../views");

console.log('[path join]', path.join());
console.log(pathPublicDir);

app.set("view engine", "pug");
app.set("views", pathViewsDir);

app.use(express.static(pathPublicDir));

app.get("/", (request, response) => {
  response.render("index", {
    title: "The Title",
    content: "Hello World!"
  });
});

app.get("/help", (request, response) => {
  response.render("help", { title: "Help", content: "Help Page" });
});

app.get("/contact", (request, response) => {
  response.render("index", { title: "Contact", content: "Contact Page" });
});

app.get("*", (request, response) => {
  response.render("page404", {
    title: "Page Not Found",
    content: "404 :: Page Not Found"
  });
});

app.listen(port, () => {
  console.log("Server is running on Port: " + port);
});
