// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    { useNewUrlParser: true }
    if (err) {
       return  console.log('Unable to connect to database server');
    }
    console.log('Connected to server.');
    const db = client.db('TodoApp');

    
    // Delete many
    // db.collection('Todos').deleteMany({text: 'Poop'})
    //     .then(result => {
    //         console.log(result);
    //     });

    // // Delete One
    //     db.collection('Todos').deleteOne({text: 'Run'})
    //         .then(result => {
    //             console.log(result);
    //         });
    // Find one and delete
    db.collection('Todos').findOneAndDelete({completed: false})
            .then(result => {
                console.log(result)
            });

    
    // client.close();
});