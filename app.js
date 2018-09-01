
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
.options( {
        a: {
            demand:true,
            alias: 'address',
            description: 'Address to fetch the weather for',
            string: true
        }
    })
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, 
    (errorMessage, results) => 
    {
      if(errorMessage) {console.log(errorMessage)}
      else {
        weather.getWeather(results.latitude, results.longitude, (errorMessage,results) => {
            if(errorMessage) {console.log(errorMessage)}
            else {console.log(JSON.stringify(results,undefined,2))}  
          });
      }  
    }
);






