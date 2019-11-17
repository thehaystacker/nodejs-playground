const yargs = require("yargs");
const { getNotes } = require("./utils");

yargs.command({
  command: "add",
  describe: "Adds a new note to the database",
  handler: function() {
    console.log(" [Analytics] Sending data to server::ADD_NOTE");
  }
});

yargs.command({
  command: "delete",
  describe: "Deletes a note from database using note ID",
  handler: function() {
    console.log(" [Analytics] Sending data to server::DELETE_NOTE ");
  }
});

const [command] = yargs.argv._;

switch (command) {
  case "add":
    console.log("[Adding note]");

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
