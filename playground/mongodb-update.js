// const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     { useNewUrlParser: true }
//     if (err) {
//        return  console.log('Unable to connect to database server');
//     }
//     console.log('Connected to server.');
//     const db = client.db('TodoApp');

    
//     // db.collection('Todos').findOneAndUpdate({
//     //     _id: new ObjectID('5be4deffe4b9df8045a3208b')
//     // }, {
//     //    $set: {
//     //        completed: true
//     //    } 
//     // }, {
//     //     returnOriginal: false

//     // }).then(result => {
//     //     console.log(result);
//     // })

//     db.collection('Users').findOneAndUpdate({
//         _id: new ObjectID("5be4d7bdf0cf1211006f4b86")
//     }, {
//         $set: {
//             name: 'Fun is Fun'
//         }
//     }, {
//         returnOriginal: false
//     }).then(result => {
//         console.log(result);
//     })

//     db.collection('Users').findOneAndUpdate({
//         _id: new ObjectID("5be4d7bdf0cf1211006f4b86")
//     }, {
//         $set: {
//             name: 'April'
//         },
//         $inc: {
//             age: 1
//         }
//     }, {
//         returnOriginal: false
//     }).then(result => {
//         console.log(result);
//     })

//     // client.close();
// });