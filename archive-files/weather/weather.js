const request = require('request');
const key = 'cb8f7c729be5391ec2ba20624a4e8ce4';

var getWeather = (lat, lag, callback) => {
	request({
		// things unique to our request
		url: `https://api.darksky.net/forecast/${key}/${lat},${lag}`,
		json: true // converts data to JSON string
	}, (error, response, body) => {
		// pretty print JSON objects
		// console.log(JSON.stringify(error, undefined, 2));
		// if (!error && response.statusCode === 200) {
		// 	console.log(body.currently.temperature)
		// } else {
		// 	console.log('Unable to fetch weather');
		// }
		if (error) {
			callback('Unable to find darksky servers');
		} else if (response.statusCode === 400) {
			console.log('unable to fetch weather');
		} else if (response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			})
		} 
	});
};

module.exports.getWeather = getWeather;
