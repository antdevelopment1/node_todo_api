let mongoose = require('mongoose');

let User = mongoose.model('User', {
    email: {
        type: String,
        // Adds validators
        required: true,
        minlength: 1,
        trim: true
    }
});

let user1 = new User({
    email: 'antdevelopment111@gmail.com   '
});
user1.save()
    .then( (user) => {
        console.log('Saved user', user)
    }, (error) => {
        console.log('Unable to save user', error);
    })


module.exports = {User};