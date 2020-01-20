const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/db-users', {useNewUrlParser: true, useCreateIndex: true}).then(() => {
    console.log('[Connected to mongodb]');
    
}).catch((error) => {
    console.log('[Unable to connect to mongodb due to :]', error);
    
})