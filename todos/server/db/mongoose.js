var mongoose = require('mongoose');

// which promise library to use
// use es6 promise
mongoose.Promise = global.Promise;

// mongoose will maintain connection
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};