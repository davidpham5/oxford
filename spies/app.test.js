// epies comes built in expect
const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App - Spy', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    
    app.__set__('db', db); // pass in what we want to replace in our functions 

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);

        // expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('should call saveUser with user object', () => {
        var email = 'dpham@example.com';
        var password = 'asdf23klm';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        })
    })
})