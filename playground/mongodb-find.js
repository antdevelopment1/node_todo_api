// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    { useNewUrlParser: true }
    if (err) {
       return  console.log('Unable to connect to database server');
    }
    console.log('Connected to server.');
    const db = client.db('TodoApp');

    // Fetches all todos from Todos collection
    // db.collection('Todos').find().toArray()
    //     .then( (docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    // });

    //  // Fetches all todos from Todos collection with a todo of completed
    // db.collection('Todos').find({completed: false}).toArray()
    //     .then( (docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    // });

    // Fetches todo by id
    // db.collection('Todos').find({
    //     _id: new ObjectID('5be4d6512af4561085781b35')
    // }).toArray()
    //     .then( (docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    // });

    // Counts all the todos in Todos collection
    // db.collection('Todos').find({}).count()
    //     .then( (count) => {
    //         console.log(`Todos count: ${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Lauren Wilkerson'}).count()
        .then( (count) => {
            console.log(`User count: ${count}`);
        }, (err) => {
            console.log('Unable to fetch todos', err);
    });
    
    // client.close();
});