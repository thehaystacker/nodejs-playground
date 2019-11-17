const fs = require("fs");
const { name, age } = require("./utils");

console.log(name);
console.log(age);

createFile("\nSecond Sentence");

function createFile(content, begin) {
  const filePath = "./notes.txt";

  if (begin) {
    fs.truncate(filePath, 0, function() {
      console.log("File Cleared");

      fs.appendFileSync(filePath, content);
    });
  } else {
    fs.appendFileSync(filePath, content);
  }
}
