var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });




// Stateless Functional Components in React
// Only works on simple presentational components with only a render function

// var About = function (props) {
//     return (
//         <h3>About Component</h3>
//     );
// };

// Arrow version
var About = (props) => {
    return (
        <h3>About Component</h3>
    );
};

module.exports = About;