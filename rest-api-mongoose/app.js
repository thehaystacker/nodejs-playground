// We will use mongoose an ODM ( Object Document Model ) to create the model for the
// mongoDB


// 1. Requiring the mongoose package
// 2. creating the connection using mongoose.connect()
// 3. Creating the model (user model for eg)

// CREATING THE BASIC MODEL USING MONGOOSE
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27018/db_users', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const modelUsers = mongoose.model('name_cltns', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const user1 = new modelUsers({
    name: 'Test name 1',
    age: 14
})

user1.save().then(response => {
    console.log('[response]', response);
    
}).catch(error => {
    console.log('[error]', error._message);
    // console.log('[error]', error._message);
    

});