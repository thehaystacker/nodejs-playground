const {MongoClient} = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:12017';
const dbName = 'db_users';

MongoClient.connect(connectionUrl + '/' + dbName, { useNewUrlParser: true }, function (error, status) {
  if (error) {
    return console.log('[connecting to database failed]');
  }

  console.log('[connection successfull]');
})
