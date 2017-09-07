// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
// 	.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			describe: 'address to fetch weather for',
// 			string: true // always parse address argument to ensure to get data
// 		}
// 	})
// 	.help()
// 	.alias('help', 'h')
// 	.argv;


// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(JSON.stringify(results, undefined, 2));
// 	}
// });

const request = require('request');
const key = 'cb8f7c729be5391ec2ba20624a4e8ce4';


request({
	// things unique to our request
	url: `https://api.darksky.net/forecast/${key}/39.0451663,-77.03917539999999`,
	json: true // converts data to JSON string
}, (error, response, body) => {
	// pretty print JSON objects
	// console.log(JSON.stringify(error, undefined, 2));
	if (!error && response.statusCode === 200) {
		console.log(body.currently.temperature)
	} else {
		console.log('Unable to fetch weather');
	}
});