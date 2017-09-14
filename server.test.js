const request = require('supertest');

var app = require('./server').app;

it('should return home page title and greetings', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('hello world')
        .end(done);
});