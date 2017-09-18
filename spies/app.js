var db = require('./db');

module.exports.handleSignup = (email, password) => {
    // check if email exists already

    // save the user to the db
    db.saveUser({
        email,
        password
    });
    // send weclome to email
}