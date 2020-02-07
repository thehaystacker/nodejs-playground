// We will use mongoose an ODM ( Object Document Model ) to create the model for the
// mongoDB


// 1. Requiring the mongoose package
// 2. creating the connection using mongoose.connect()
// 3. Creating the model (user model for eg)
// 4. Checking errors when we pass the wrong data
// 5. Installing the npm validator package and using it
// 6. Using the inbuilt validating properties of mongoose ( like trim, required )

// // CREATING THE BASIC MODEL USING MONGOOSE
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27018/db_users', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// })

// const modelUsers = mongoose.model('name_cltns', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const user1 = new modelUsers({
//     name: 'Test name 1',
//     age: 14
// })

// user1.save().then(response => {
//     console.log('[response]', response);
    
// }).catch(error => {
//     console.log('[error]', error._message);
// });

// USING VALIDATOR NPM PACKAGE
const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27018/db_users', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const modelUsers = mongoose.model('users', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        validate: function (value) {
            if (value < 0) {
                throw new Error('Age must be above 18');
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: function (value) {
            if (!(validator.isEmail(value))) {
                throw new Error('Not a valid email address');
            }
        }
    }
})

const user1 = new modelUsers({
    name: 'Sangeeth',
    email: 'sangeethks.in@gmail.com'
});

user1.save().then(response => {
    console.log('[responnse]', response);
    
}).catch(error => {
    console.log('[error]', error);
    
})