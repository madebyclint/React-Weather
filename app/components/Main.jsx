var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
        // Only one parent container can go here - so one div
        <div>
            <Nav/>
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
};

module.exports = Main;