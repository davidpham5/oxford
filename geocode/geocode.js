const request = require('request');

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);
    var decodedAddress = decodeURIComponent(encodedAddress);
    // config object, callback fn
    request({
        // things unique to our request
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true // converts data to JSON string
    }, (error, response, body) => {
        // pretty print JSON objects
        // console.log(JSON.stringify(error, undefined, 2));
        if (error) {
            console.log('Unable to connect to servers');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find that address');
        } else if (body.status === 'OK') {
            console.log(`Address: ${body.results[0].formatted_address}`, `location: ${body.results[0].geometry.location.lat}, ${body.results[0].geometry.location.lng}`);
        }
    });
}

module.exports = {
    geocodeAddress
}

