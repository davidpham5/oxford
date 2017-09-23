var mongoose = require('mongoose');

// which promise library to use
// use es6 promise
mongoose.Promise = global.Promise;

// mongoose will maintain connection
mongoose.connect('mongodb://localhost:27017/TodoApp')

// create a todo model 
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        // validate
        required: true,
        minlength: 1,
        // trim whitespace
        trim: true
    },
    completed: {
        type: Boolean,
        // set the default property, to false
        default: false
    },
    completedAt: {
        type: Number,
        // if completed is false, this is false
        default: null
    }
});

// new todo
var todo1 = new Todo({
    text: 'cook dinner'
});

// save to db
// todo1.save().then( (doc) => {
//     console.log('save todo', doc);
// }, (error) => {
//     console.log('unable to save todo', error);
// });

// var todo2 = new Todo({
//     text: 'cuddle with Sara',
//     completed: true,
//     completedAt: 2
// });

// var todo2 = new Todo({
//     text: ' cuddle with Sara '
// });

todo2.save().then( (doc) => {
    console.log('save todo', JSON.stringify(doc, undefined, 2));
}, (error) => {
    console.log('unable to save todo', error);
});

// User modal
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var user1 = new User({
    email: ' dpham@example.com '
})

user1.save().then( (doc) => {
    console.log('saved user: ', JSON.stringify(doc, undefined, 2));
}, (error) => {
    console.log('unable to save user', error);
})