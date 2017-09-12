const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express(); // creates app

// include support for paritals
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

// this is how we register middleware
app.use( (req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);

    fs.appendFile('server.log', log + '\n', (error) => {
        if (error) {
            console.log('Unable to append to server.log');
        }
    });
    // next behaves like then() and allows for the app to continue
    next();
});

// replace currentYear in our routes render object with a helper function
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('caps', (text) => {
    return text.toUpperCase();
    
})

// app.use( (req, res, next) => {
//     res.render('maintenance.hbs', {
//     });
//     next();
// });

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
        greetings: 'Welcome'
    })
});
// app.get('/about', (request, response) => {
//     response.send('About Page')
// });
app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'about page'
        
    });
});

app.get('/bad', (request, response) => {
    response.send({
        error: 'Error 404'
    })
})
// bind our app to port in our lcoalhost
app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});