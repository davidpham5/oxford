const request = require('supertest');
const expect = require('expect');

var app = require('./supertest').app;

// Describe() allows to group several tests under one category
describe('server', () => {
    describe('get home', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                // .expect('hello world')
                // .expect({
                //     error: 'Page not found'
                // })
                .expect( (response) => {
                    // This expect() comes from the const.
                    expect(response.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(done);
        });
    });
    
    describe('get /users', () => {
        it('should expect users name and age', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect( (resp) => {
                    expect(resp.body).toInclude({
                        name: 'David',
                        age: 33
                    })
                })
                .end(done);
        });
    });
});