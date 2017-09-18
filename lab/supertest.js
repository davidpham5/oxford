const express = require('express');

var app = express();

app.get('/', (request, response) => {
    // response.status().send('hello world');
    response.status(404).send({
        error: 'Page not found',
        name: 'Todo App 1.0'
    });
});

app.get('/users', (req, resp) => {
    resp.send([
        {
            name: 'David',
            age: 33
        },
        {
            name: 'Sara',
            age: 34
        },
        {
            name: 'Leo',
            age: 8
        }
    ])
});

app.listen(3000, () => {
    console.log(`Server is up on port: 3000`);
});
module.exports.app = app;