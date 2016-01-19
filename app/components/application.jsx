var React = require('react');
module.exports = function() {

	var MainComponent = React.createClass({
		render: function() {
			return (
				<div>
					<h1>test</h1>
				</div>
			)
		}
	});

	return MainComponent;
}

	// var MoneyComponent = React.createClass({
	// 	addCurrency: function() {

	// 	},
	// 	getMoney: function() {
	// 		$.ajax({
	// 			url: 'http://apilayer.net/api/live',
	// 			type: 'GET',
	// 			dataType: 'json',
	// 			data: {
	// 				access_key: 'f1f116c3a40a527ac1a2594a9a477758',
	// 				currencies: 'usd, rub',
	// 				format: 1,
	// 			},
	// 		})
	// 		.success(function(data) {
	// 			console.log(data);
	// 		});
	// 	},
	// 	render: function() {
	// 		return (
	// 			<div>
	// 				<h1>Прогноз сбережений</h1>
	// 				<a className="btn btn-primary" href="#" onClick={this.addCurrency}><i className="fa fa-plus"></i> Валюта</a>
	// 			</div>
	// 		)
	// 	}
	// });








