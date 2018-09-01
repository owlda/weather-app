const request = require('request');


var geocodeAddress = (address, callback) =>
{
    request (   {    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`, json:true}, 
    (error, reponse, body) => 
    { 

        if(error) {callback('Error to connect to Google servers.');
    }
        else if (body.status === 'ZERO_RESULTS') {callback('Incorrect address. Try to input a correct one.');
    }
        else if (body.status === 'OK') {
            callback(undefined, { 
                adress: body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng

            })
            console.log(`Address : ${body.results[0].formatted_address}`);
          
        }
                     } );
}
module.exports.geocodeAddress = geocodeAddress;


    
    
   
