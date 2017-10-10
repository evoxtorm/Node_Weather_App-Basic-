//const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

	geocode.geocodeAddress(argv.address, (errorMessage, results) => {
		if (errorMessage) {
			console.log(errorMessage);
		} else {
			console.log(results.address);
			weather.getWeather(results.Latitude, results.longitude, (errorMessage, weatherResults) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(`It's currently ${weatherResults.temperature}. It's feel like ${weatherResults.apparentTemperature}.`)
	}
});
		}
	}); 

// 	var encodeAddress = encodeURIComponent(argv.address);

// request({
// 	url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
// 	json: true
// }, (error, response, body) => {
// 		if (error) {
// 			console.log('Unable to connect to Google Servers.');
// 		} else if (body.status === 'ZERO_RESULTS') {
// 			console.log('Unable to find the address.');
// 		} else if (body.status === 'OK') {
// 			console.log(`Address: ${body.results[0].formatted_address}`);
// 			console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
// 			console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
// 		}
	
// });*/

// weather.getWeather(28.6438234, 77.3726379, (errorMessage, weatherResults) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(JSON.stringify(weatherResults, undefined, 2));
// 	}
// });
