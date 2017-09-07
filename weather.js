const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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


geocode.geocodeAddress(argv.address);