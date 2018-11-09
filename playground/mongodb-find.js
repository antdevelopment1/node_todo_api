// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    { useNewUrlParser: true }
    if (err) {
       return  console.log('Unable to connect to database server');
    }
    console.log('Connected to server.');
    const db = client.db('TodoApp');

    
    client.close();
});