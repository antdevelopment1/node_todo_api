// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    { useNewUrlParser: true }
    if (err) {
       return  console.log('Unable to connect to database server');
    }
    console.log('Connected to server.');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo');
        } console.log(JSON.stringify(result.ops, undefined, 2))
    })

    db.collection('Users').insertOne({
        name: 'Lauren Wilkerson',
        age: 27,
        location: 'Next to me'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user');
        } console.log(result.ops[0]._id.getTimestamp())
    })

    // Insert new doc into users (name, age, locationString) 
    client.close();
});