var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/users');

var app = express();

// use middleware
app.use(bodyParser.json());

// Routes
app.post('/todos/', (req, resp) => {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        resp.send(doc);
    }, (error) => {
        resp.status(400).send(error);
    });
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});

module.exports = {
    app
};
// new todo
// var todo1 = new Todo({
//     text: 'cook dinner'
// });

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

// todo2.save().then( (doc) => {
//     console.log('save todo', JSON.stringify(doc, undefined, 2));
// }, (error) => {
//     console.log('unable to save todo', error);
// });


// var user1 = new User({
//     email: ' dpham@example.com '
// })

// user1.save().then( (doc) => {
//     console.log('saved user: ', JSON.stringify(doc, undefined, 2));
// }, (error) => {
//     console.log('unable to save user', error);
// })