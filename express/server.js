const express = require('express');
const hbs = require('hbs');
var app = express(); // creates app

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
// users request html doc or json
// routes like in angular
app.get('/', (request, response) => {
    //response.send('<h1>hello express world</h1>');
    // response.send({
    //     name: 'david',
    //     dog: 'leo',
    //     wife: 'sara',
    //     love: ['family', 'wife', 'dog']
    // })
    response.render('home.hbs', {
        pageTitle: 'Home',
        greetings: 'Welcome',
        currentYear: new Date().getFullYear()
    })
});
// app.get('/about', (request, response) => {
//     response.send('About Page')
// });
app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'about page',
        currentYear: new Date().getFullYear()
    });
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