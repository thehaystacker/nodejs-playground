const { MongoClient } = (mongodb = require("mongodb"));

const connectionUrl = "mongodb://127.0.0.1:27017";
const db_users = "db_users";
const db_tasks = "db_tasks";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log("[connecting to database failed]", error.message);
      return;
    }

    const dbUsers = client.db(db_users);
    const dbTasks = client.db(db_tasks);

    dbUsers.collection("users").insertOne({
      name: "Sangeeth",
      age: 20
    });

    dbTasks.collection("tasks").insertOne({
      title: "Task 1",
      description: "Do it before 1 PM"
    });
  }
);
