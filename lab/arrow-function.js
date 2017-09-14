var sqaure = (x) => x * x;
console.log(sqaure(9));

var user = {
    name: 'David',
    sayHi: () => {
        console.log('hello'); // arrow functions will not bind this keyword
    },
    sayHiAlt () { // this synatx provides this binding
        console.log(`hello ${this.name}`);
    }
}
console.log(user.sayHiAlt());