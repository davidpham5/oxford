var add = (a, b) => {
    return a + b;
};

var square = (a) => {
    return a * a;
};

var setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};

var asyncAdd = (a, b, callback) => {
    setTimeout( () => {
        callback(a + b);
    }, 1000);
};

var asyncSq = (a, callback) => {
    setTimeout( () => {
        callback(a * a);
    }, 1000)
};

module.exports = {
    add,
    square,
    setName,
    asyncAdd,
    asyncSq
}