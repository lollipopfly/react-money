// var MainComponent = require('./components/application.js');

var React = require('react');
var NewComponent = require('./components/newcomponent.jsx');
var ReactDOM = require('react-dom');

// React.render(React.createElement(MainComponent), document.getElementById('content'));

/*------------------------------------*\
    Init
\*------------------------------------*/



ReactDOM.render(
	<NewComponent />,
	document.getElementById('content')
);



