const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todos} = require('./models/todos');
const {User} = require('./models/user');

let app = express();

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/todos', (req, res) => {
    // This body gets stored by body parser
    console.log(req.body);
    let todos = new Todos({
        text: req.body.text
    });

    console.log(req.body);
    
    todos.save()
        .then( (doc) => {
            res.send(doc);
        }, (e) => {
            res.status(400).send(e);
        })
})


// Get 




app.listen(3000, () => {
    console.log('Started on port 3000');
})






