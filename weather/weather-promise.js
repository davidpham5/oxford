const yargs = require('yargs');
const axios = require('axios'); // promises and http requests

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'address to fetch weather for',
			string: true // always parse address argument to ensure to get data
		},
		lat: {
			
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

// encode address and get address
var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

// Automatically JSON.stringfy our address, Promises built-in
axios.get(geocodeURL).then( (response) => {
	// headers, response.data, body
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find that address');
	}
	var lat = response.data.results[0].geometry.location.lat;
	var long = response.data.results[0].geometry.location.lng;
	const key = 'cb8f7c729be5391ec2ba20624a4e8ce4';
	var	weatherURL = `https://api.darksky.net/forecast/${key}/${lat},${long}`;
	console.log(response.data.results[0].formatted_address);
	
	return axios.get(weatherURL);
}).then( (response) => {
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	
	console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`)
}).catch((error) => {
	if (error.code === 'ENOTFOUND') {
		console.log('Unable to connect to google maps api');
	} else {
		console.log(error.message);
	}
});