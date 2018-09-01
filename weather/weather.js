
const request = require('request');


var getWeather =(lat,lng,callback) =>  {  request({url:`https://api.darksky.net/forecast/f3427b22d5fff81f364c126a67a8165c/${lat},${lng}`, json:true},
     (error, reponse, body) => 
{
    
    if(error) {callback ('Error to connect to API servers...');}
    else if (reponse.statusCode ===200) {callback ( `Temperature : ${body.currently.temperature} F, but feels like ${body.currently.apparentTemperature} F.`); 
    callback (`Summary now is : ${body.currently.summary}` );
    var celTemperature = (body.currently.temperature -32)/1.78;
    callback( `Temperature in Celcius : ${celTemperature} C.`);
    }
    else {callback ('Error until connection...')}
})
}
module.exports.getWeather = getWeather;