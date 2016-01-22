var React = require('react');
var $     = require('jquery');

var FormComponent = React.createClass({
	getCurrencyStorage: function() {
		if(typeof(Storage) !== "undefined") {
			var currencies = localStorage.getItem('currencies');

			return currencies;
		} else {
			console.log('Sorry locastorage not working in this browser!');
		}
	},

	render: function() {
		var storage = this.props.storage;

		if(storage) {
			return (
				<div className="col-md-7">
					<h1>Прогноз сбережений</h1>
					<table>
						<tbody>
							<tr>
								<td>Сбережения</td>
								<td>В моей валюте, <i className="fa fa-rub"></i></td>
								<td>Ставки вкладов</td>
							</tr>
							{
								storage.map(function(currency, key) {
									return (
										<tr key={key}>
											<td>
												<i className={"fa form__icon " + currency.className}></i>
												<input type="text"/>
											</td>
											<td>
												2123
											</td>
											<td>
												<input type="text"/>
											</td>
										</tr>)
								})
							}
						</tbody>
					</table>
					<a className="btn btn-primary btn-sm modal-trigger" href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-plus"></i> Валюта</a>
				</div>
			);
		} else {
			return (
				<div className="col-md-7">
					<h1>Прогноз сбережений</h1>
					<table>
						<tbody>
							<tr>
								<td>Сбережения</td>
								<td>В моей валюте, <i className="fa fa-rub"></i></td>
								<td>Ставки вкладов</td>
							</tr>
						</tbody>
					</table>
					<a className="btn btn-primary btn-sm modal-trigger" href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-plus"></i> Валюта</a>
				</div>
			)
		}
	}
});

module.exports = FormComponent;