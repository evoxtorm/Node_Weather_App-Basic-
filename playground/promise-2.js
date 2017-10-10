const request = require('request');


let geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		var encodeAddress = encodeURIComponent(address);

request({
	url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
	json: true
}, (error, response, body) => {
		if (error) {
			reject('Unable to connect to Google Servers.');
			//console.log('Unable to connect to Google Servers.');
		} else if (body.status === 'ZERO_RESULTS') {
			reject('Unable to find the address.');
			//console.log('Unable to find the address.');
		} else if (body.status === 'OK') {
			resolve({
				address: body.results[0].formatted_address,
				Latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			});
			/*console.log(`Address: ${body.results[0].formatted_address}`);
			console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
			console.log(`Latitude: ${body.results[0].geometry.location.lng}`); */
		}
	
});
	});
};

geocodeAddress('201014').then((location) => {
	console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage);
});