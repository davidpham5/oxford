const request = require('request');

const geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        request({
            // things unique to our request
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true // converts data to JSON string
        }, (error, response, body) => {
            // pretty print JSON objects
           // console.log(JSON.stringify(body, undefined, 2));
            if (error) {
                reject('Unable to connect to servers')
            } else if (body.status === 'ZERO_RESULTS') {
                resolve('Unable to find that address')
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    })
};

geocodeAddress(20902).then( (location) => {
    console.log('success! ', JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log('error: ', errorMessage);
});