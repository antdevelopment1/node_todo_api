let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        // Adds validators
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// let newTodo = new Todo({
//     text: 'Cook dinner'
// })
// newTodo.save()
//     .then((doc) => {
//         console.log('Saved Todo', doc);
//     }, (e) => {
//         console.log('Unable to save todo');
//     })


let secondTodo = new Todo({
    text: '    Edit this video     '
})

// Saves new info to mongo database and save also returns a promise

secondTodo.save()
    .then((doc) => {
    console.log('Saved Todo', doc);
}, (e) => {
    console.log('Unable to save todo');
})

