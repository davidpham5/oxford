const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    var lat, long, city;
   
	if (errorMessage) {
		console.log(errorMessage);
	} else {
        lat = results.latitude;
        long = results.longitude;
        city = results.city.results[0].address_components[0].long_name;
        state = results.city.results[0].address_components[3].short_name;
        //console.log(JSON.stringify(results, undefined, 2));
        
        weather.getWeather(lat, long, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(results.address);
                console.log(`It feels like ${weatherResults.apparentTemperature} degrees in ${city}, ${state}`);
               // console.log(JSON.stringify(weatherResults, undefined, 2));
            }
        });
    }
});
