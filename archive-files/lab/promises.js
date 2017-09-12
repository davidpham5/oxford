var asyncAdd = (a, b) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('arguments must be numbers');
            }
        }, 1500);
    })
}

asyncAdd(22, 6).then( (result) => {
    console.log('added: ', result);
    // chaining our promises outputs
    return asyncAdd(result, 33);
}).then( (result) => {
    console.log('chained promise result: ', result);
}).catch( (errorMessage) => {
    console.log(errorMessage);
});

var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hey it worked');
        reject('unable to fullfill promise');
    }, 2500);
    
}); 

somePromise.then( (message) => {
    console.log('Success: ', message);
}, (errorMessage) => {
    console.log('Rejected: ', errorMessage);
})