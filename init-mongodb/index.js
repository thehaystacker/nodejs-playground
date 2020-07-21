const mongodb = require("mongodb");

const { URL_CONNECTION, DATABASE_NAME } = require("./constants");

const MongoClient = mongodb.MongoClient;
// Creating the connection
MongoClient.connect(
  URL_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, client) => {
    if (error) {
      console.log(
        `[ERROR] CONNECTING TO THE DATABASE CLIENT ${URL_CONNECTION1}`
      );

      return;
    }

    console.log("[SUCCESS] ESTABLISHED DATABASE CONNECTION");

    // Specifying the database
    const db = client.db(DATABASE_NAME);

    // db.collection("user").insertOne(
    //   {
    //     username: "Sangeeth",
    //     age: 25,
    //   },
    //   (error, result) => {
    //     console.log("result.ops", result.ops);
    //     console.log("result.insertedCount:", result.insertedCount);
    //     console.log("result.insertedId", result.insertedId);
    //   }
    // );

    db.collection("user").insertMany(
      [
        {
          username: "Sangeeth",
          age: 25,
        },
        {
          username: "Sarath",
          age: 22,
        },
      ],
      (error, result) => {
        if (error) {
          `[ERROR] INSERTING DOCUMENT TO THE COLLECTION user`;
          return;
        }

        console.log("result", result);
        // console.log("result.ops", result.ops);
        // console.log("result.insertedCount:", result.insertedCount);
        // console.log("result.insertedId", result.insertedId);
      }
    );
  }
);
