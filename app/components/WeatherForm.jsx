var React = require('react');

var WeatherForm = React.createClass({
    render: function () {
        return (
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="Enter city name"/>
                    </div>
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
}); 

module.exports = WeatherForm;