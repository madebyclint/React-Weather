var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Miami',
            temp: 88
        }
    },
    handleSearch: function (location) {
        var that = this;
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp
            });
        }, function (errorMessage) {
            alert(errorMessage);
        });
    },
    render: function () {
        var {temp, location} = this.state;
        return (
            // Only one parent container can go here - so one div
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage temp={temp} location={location}/>
            </div>
        );
    }
});

module.exports = Weather;