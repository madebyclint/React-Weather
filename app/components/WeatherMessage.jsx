var React = require('react');

// Destructuring assignment syntax ES6
var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <h3 className="text-center">It is {temp}&#176;F in {location}</h3>
        </div>
    )
};

module.exports = WeatherMessage;