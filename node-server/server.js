const express = require('express');

var app = express(); // creates app

app.use(express.static(__dirname + '/public'));
// users request html doc or json
// routes like in angular
app.get('/', (request, response) => {
    //response.send('<h1>hello express world</h1>');
    response.send({
        name: 'david',
        dog: 'leo',
        wife: 'sara',
        love: ['family', 'wife', 'dog']
    })
});
app.get('/about', (request, response) => {
    response.send('About Page')
});

app.get('/bad', (request, response) => {
    response.send({
        error: 'Error 404'
    })
})
// bind our app to port in our lcoalhost
app.listen(3000, () => {
    console.log('Server is up on localhost:3000');
});