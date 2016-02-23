var React         = require('react');
var $             = require('jquery');
var CurrencyModal = require('./currencyModal.jsx');



var FormComponent = React.createClass({
	getInitialState: function() {
		return {
			storage: this.getStorage(),
		}
	},

	getStorage: function() {
		// get info from Local Storage
		if(typeof(Storage) !== "undefined") {
			var storage = localStorage.getItem("currencies");
			if(storage) {
				storage = JSON.parse(storage) || [];
				return storage;
			}
		}
	},

componentDidUpdate: function(prevProps, prevState) {
    localStorage.state = JSON.stringify(this.state);

},

	getCurrencyStorage: function() {
		if(typeof(Storage) !== "undefined") {
			var currencies = localStorage.getItem('currencies');

			return currencies;
		} else {
			console.log('Sorry locastorage not working in this browser!');
		}
	},

	render: function() {
		var storage = this.state.storage;
		console.log(storage);
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
												test number
											</td>
											<td>
												<input type="text"/>
											</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
					<a className="btn btn-primary btn-sm modal-trigger" href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-plus"></i> Валюта</a>

					<CurrencyModal storage={this.state.storage}/>
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
				<CurrencyModal storage={this.state.storage}/>
				</div>
			)
		}
	}
});

module.exports = FormComponent;