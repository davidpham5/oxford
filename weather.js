const request = require('request');
const yargs = require('yargs');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'address to fetch weather for',
			string: true // always parse address argument to ensure to get data
		}
	})
	.help()
	.alias('help', 'h')
	.argv;
var encodedAddress = encodeURIComponent(argv.address);
var decodedAddress = decodeURIComponent(encodedAddress);
// config object, callback fn
request({
	// things unique to our request
	url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true // converts data to JSON string
}, (error, response, body) => {
	// pretty print JSON objects
	// console.log(JSON.stringify(error, undefined, 2));
	
	console.log(`Address: ${body.results[0].formatted_address}`, `location: ${body.results[0].geometry.location.lat}, ${body.results[0].geometry.location.lng}`);
});