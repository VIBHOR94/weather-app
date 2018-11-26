const request = require('request')

var geocode = (inputAddress, callback) => {
	request({
	url: `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.WEATHER_APP_KEY}&location=${encodeURIComponent(inputAddress)}`,
	json: true
	}, (error, response, body) =>  {
		if(body.info.statuscode == 0) {
			callback(undefined, {
				address: body.results[0].providedLocation.location,
				latitude: body.results[0].locations[0].latLng.lat,
				longitude: body.results[0].locations[0].latLng.lng
			})
		}
	});
}

module.exports.geocodeAddress = geocode