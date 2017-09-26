const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todos');

// Lifecycle Method
// make sure the debabase is empty
beforeEach((done) => {
    Todo.remove({
        // wipe all todos with empty object 
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        // dummy text
        var text = 'test todo text';
        
        request(app)
            .post('/todos')
            .send({
                text: text
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((error, resp) => {
                if (error) {
                    return done(error);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((error) => done(error));
            });
    });

    // verify a todo is not created when bad data is sent
    it('should not create todo wit invalid body data', (done) => {
        
        request(app)
            .post('/todos')
            .send({})// send an empty object
            .expect(400)
            .end((error, resp) => {
                if (error) {
                    return done(error)
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(0);
                    done();
                }).catch((error) => {
                    done(error);
                });
            });
    })
});