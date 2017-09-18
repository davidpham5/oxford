const expect = require('expect');
const utilities = require('./utils')

describe('basic tests', () => {
    // test case is a function to evaluate our module
    // it() takes in two arguments. first on takes in a string. It describes what the function should do.
    // second is a function that tests the imported module's functions
    it('should add two numbers', function() {
        // utilities is defined above as a imported module
        var result = utilities.add(33, 2);
        
        expect(result).toBe(35);
        // if (result === NaN) {
        //     throw new Error('valule not correct');
        // }
    })

    it('should square a number', () => {
        var results = utilities.square(3);
        expect(results).toBe(9);
        // if (results === 0) {
        //     throw new Error('only non-zero numbers!');
        // }
    })

    it('should expect some value', () => {
        expect(12).toNotBe(3);
        expect({
            name: 'andrew'
        }).toEqual({ // toEqual can test objects/arrays
            name: 'andrew'
        })
        //does the array include 5?
        //expect([2, 3, 4]).toInclude(5); 
        expect([2, 3, 4]).toNotInclude(5); 
    })
     
    it('should verify first and last name are set', () => {
        // asserts it includes firstName and lastName with proper values.
        var user = {
            fullName: 'David Pham',
            age: 33,
            location: 'Silver Spring'
        };

        var results = utilities.setName(user, 'David Pham');

        expect(user).toEqual(results); // objects are passed by reference, and updated. Thus equals
        expect(results).toInclude({
            firstName: 'David',
            lastName: 'Pham'
        });
    });
    describe('#asyncAdd', () => {
        it('should async add our two numbers', (done) => { // done argument is the way to tell mocha this is an async fn
            // wait, Mocha, for done to be called before finishing the test
            utilities.asyncAdd(3, 9, (sum) => { // the callback is executed in utils.js. We expect a sum, 
                // thus we place an arg
                expect(sum).toBe(12).toBeA('number');
                done();
    
            })
        });
    })
    describe('#asyncSq', () => {
        it('should async square our number', (done) => { // done argument is the way to tell mocha this is an async fn
            utilities.asyncSq(3, (sq) => {
                expect(sq).toBe(9).toBeA('number');
                done();
            })
        });
    })
})
