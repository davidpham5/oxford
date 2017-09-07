const request = require('request');

var geocodeAddress = (address, callback) => {
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
            callback('Unable to connect to servers')
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address')
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports = {
    geocodeAddress
}

