var React         = require('react');
// var CurrencyModal = require('./currencyModal.jsx');
var FormComponent = require('./form.jsx');

if(typeof(Storage) !== "undefined") {
	var storage = localStorage.getItem("currencies");
	if(storage) {
		storage = JSON.parse(storage);
	}
}

var Application = React.createClass({
	render: function() {
		return (
			<div>
				<CurrencyModal storage={storage} />
			</div>
		);
	}
});

module.exports = Application;








