const { MongoClient } = (mongodb = require("mongodb"));

const connectionUrl = "mongodb://127.0.0.1:27017";
const db_users = "db_users";
const db_tasks = "db_tasks";

const establishConnection = () => {
  return new Promise((resolve, reject) => {
    let connectOptions = {
      useNewUrlParser: true
    };
    MongoClient.connect(connectionUrl, connectOptions, (error, client) => {
      if (error) {
        reject({ error: true, message: error.message });
      }

      resolve({ success: true, client });
    });
  });
};

const insertOneToDB = function(dbName, collectionName, insertObj) {
  // console.log("[this]", this);
  // console.log("[dbName]", dbName);
  // console.log("[insertObj]", insertObj);

  return new Promise((resolve, reject) => {
    this.db(dbName)
      .collection(collectionName)
      .insertOne(insertObj, (error, result) => {
        if (error) {
          reject({
            error: true,
            message: `Insert Error : Inserting to ${collectionName} failed`
          });
        }

        resolve({ success: true, data: result.ops });
      });
  });
};

const insertManyToDB = function (dbName, collectionName, userObj) {
  return new Promise((resolve, reject) => {
    this.db(dbName)
      .collection(collectionName)
      .insertMany(userObj, (error, result) => {
        if (error) {
          reject({ error: true, message: error.message });
        }

        resolve({ success: true, data: result.ops });
      });
  });
};

const initPage = async () => {
  const connection = await establishConnection();

  if (connection.success) {
    const { client } = connection;

    const insertOneToUser = async userObj => {
      const result = await insertOneToDB.bind(
        client,
        db_users,
        "users",
        userObj
      )();

      if (result.success) {
        console.log("[insertOneToUser > data]", result.data);
      } else {
        console.log("[insertOneToUser > error]", result.message);
      }
    };

    const insertManyToUsers = async userObj => {
      const result = await insertManyToDB.bind(
        client,
        db_users,
        "users",
        userObj
      )();

      console.log("[insertManyToUsers]", result);
    };

    insertOneToUser({
      name: "sarath",
      age: 19
    });

    insertManyToUsers([
      {
        name: "Sarath",
        age: 19
      },
      {
        name: "Leela",
        age: 54
      }
    ]);
  } else {
    const { message } = connection;
  }
};

initPage();
