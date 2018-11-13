let mongoose = require('mongoose');



let Todos = mongoose.model('Todos', {
    text: {
        type: String,
        // Adds validators
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


module.exports = {Todos};
