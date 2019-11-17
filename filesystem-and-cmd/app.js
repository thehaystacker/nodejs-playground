const { getNotes } = require("./utils");

const command = process.argv[2];

console.log(" [process.argv] ", process.argv);

if (command === "add") {
  console.log("Adding notes");
}
