let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

let newTodo = new Todo({
    text: 'Cook dinner'
})

let secondTodo = new Todo({
    text: 'Eat Ice Cream',
    type: true,
    completedAt: 20
})

// Saves new info to mongo database and save also returns a promise
newTodo.save()
    .then((doc) => {
        console.log('Saved Todo', doc);
    }, (e) => {
        console.log('Unable to save todo');
    })

secondTodo.save()
    .then((doc) => {
    console.log('Saved Todo', doc);
}, (e) => {
    console.log('Unable to save todo');
})

