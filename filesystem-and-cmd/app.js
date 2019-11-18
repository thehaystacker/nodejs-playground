const fs = require("fs");
const yargs = require("yargs");
const { getNotes } = require("./utils");

yargs.command({
  command: "add",
  describe: "Adds a new note to the database",
  builder: {
    title: {
      describe: "Title of the note",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log(" [Analytics] Sending data to server::ADD_NOTE", argv);
  }
});

yargs.command({
  command: "delete",
  describe: "Deletes a note from database using note ID",
  handler: function() {
    console.log(" [Analytics] Sending data to server::DELETE_NOTE ");
  }
});

yargs.parse();

console.log("[yargs.argv]", yargs.argv);

const [command] = yargs.argv._;
const { title } = yargs.argv;

console.log("[title]", title);

let notes = [];
let note = { title };
notes.push(note);

switch (command) {
  case "add":
    let notes = fs.readFile("./notes.json", null, function(err, notes) {
      console.log(" [err] ", err);

      if (err) {
        fs.writeFile("./notes.json", JSON.stringify([{title}]), function() {});
      } else {
        console.log(" [notes] ", JSON.parse(notes.toString()));
      }
    });

    break;

  case "delete":
    console.log("[Deleting note]");

    break;

  case "read":
    console.log("[Reading note]");

    break;

  case "list":
    console.log("[Listing all notes]");

    break;

  default:
    console.log("[Command not accepted]");

    break;
}
