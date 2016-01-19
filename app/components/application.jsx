var React         = require('react');
var FormComponent = require('./form.jsx');
var CurrencyModal = require('./currencyModal.jsx');

var Application = React.createClass({
	render: function() {
		return (
			<div>
				<FormComponent />
				<CurrencyModal />
			</div>
		);
	}
});

module.exports = Application;








