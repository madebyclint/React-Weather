var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    render: function () {
        return (
            // Only one parent container can go here - so one div
            <div>
                <h3>Weather component</h3>
                <WeatherForm/>
                <WeatherMessage/>
            </div>
        );
    }
});

module.exports = Weather;