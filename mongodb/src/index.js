const { MongoClient, ObjectID } = (mongodb = require("mongodb"));

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

const insertManyToDB = function(dbName, collectionName, userObj) {
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

const findUser = function(userObj) {
  const dbName = "db_users";
  const collectionName = "users";

  return new Promise((resolve, reject) => {
    this.db(dbName)
      .collection(collectionName)
      .findOne(userObj)
      .then(data => {
        resolve({ success: true, data });
      })
      .catch(error => {
        reject({ success: false, message: error.message });
      });
  });
};

const updateUser = function(userObj, updateUserObj) {
  const dbName = "db_users";
  const collectionName = "users";

  return new Promise((resolve, reject) => {
    this.db(dbName)
      .collection(collectionName)
      .updateMany(userObj, {
        $set: updateUserObj
      })
      .then(result => {
        if (result.modifiedCount > 0) {
          resolve({ success: true, message: `${result.modifiedCount} results updated` });
        }

        reject({ success: false, message: "Error: no records to update" });
      })
      .catch(error => {
        reject({ success: false, message: "Error: uncaught error occurred" });
      });
  });
};

const initPage = async () => {
  const connection = await establishConnection();

  if (connection.success) {
    const { client } = connection;

    const insertOneToUser = async userObj => {
      const result = await insertOneToDB.call(
        client,
        db_users,
        "users",
        userObj
      );

      if (result.success) {
        console.log("[insertOneToUser > data]", result.data);
      } else {
        console.log("[insertOneToUser > error]", result.message);
      }
    };

    const insertManyToUsers = async userObj => {
      const result = await insertManyToDB.call(
        client,
        db_users,
        "users",
        userObj
      );

      console.log("[insertManyToUsers]", result);
    };

    // insertOneToUser({
    //   name: "sarath",
    //   age: 19
    // });

    // insertManyToUsers([
    //   {
    //     name: "Sarath",
    //     age: 19
    //   },
    //   {
    //     name: "Leela",
    //     age: 54
    //   }
    // ]);

    // // FIND
    // const userObj = {
    //   _id: new ObjectID("5e08731ee66f185db0b5e3c4")
    // };
    // const userResponse = await findUser.call(client, userObj);

    // if (userResponse.success) {
    //   console.log("[userResponse > data]", userResponse.data);
    // } else {
    //   console.log("[userResponse > error]", userResponse.message);
    // }

    // UPDATE
    const userObj = {
      // _id: new ObjectID("5e08731ee66f185db0b5e3c4")
      name: "Leela Sreedharan"
    };

    const updateUserObj = {
      name: "Sreedharan"
    };

    
    try {
      const updateResult = await updateUser.call(client, userObj, updateUserObj);
      
      console.log("[RECORD UPDATE]", updateResult.message);
      
    } catch (error) {
      console.log("[Record updated failed]", error);
      
    }

  } else {
    const { message } = connection;
  }
};

initPage();
