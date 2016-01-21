var React = require('react');

if(typeof(Storage) !== "undefined") {
	var currencies = localStorage.getItem("currencies");
	if(currencies) {
		currencies = JSON.parse(currencies);
	}
}


var CurrencyModal = React.createClass({
	getInitialState: function() {
		return {
			storageCurrency: currencies,
			currencies:[
				{
					code: "rub",
					name: 'Рубль',
					className: 'fa-rub'
				},
				{
					code: 'dollar',
					name: 'Доллар',
					className: 'fa-usd'
				},
				{
					code: 'euro',
					name: 'Евро',
					className: 'fa-eur'
				}]
		}
	},

	addCurrency: function() {
		if(typeof(Storage) !== "undefined") {
			var currenciesFromStorage = JSON.parse(this.getCurrency()); // get currencies string from localstorage
			var currencySelectObj = JSON.parse(this.refs.currencySelect.value); // selected currency & make obj

			if(currenciesFromStorage) {
				// Chek the condition if selected currency is entry in localstorage
				for (var i = 0; i < currenciesFromStorage.length; i++) {
					if(currenciesFromStorage[i].name === currencySelectObj.name) {
						alert('Такая валюта уже есть!');
						return false;
					}
				}
			} else {
				//  if localstorage is empty
				var currenciesFromStorage = Array();
			}

			// Add currency
			currenciesFromStorage.push(currencySelectObj);
			currenciesFromStorage = JSON.stringify(currenciesFromStorage);
			localStorage.setItem('currencies', currenciesFromStorage); // set currencies string to localstorage
		} else {
			console.log('Sorry locastorage not working in this browser!');
		}
	},

	getCurrency: function() {
		if(typeof(Storage) !== "undefined") {
			var currencies = localStorage.getItem('currencies');
			return currencies;
		} else {
			console.log('Sorry locastorage not working in this browser!');
		}
	},

	render: function() {
		var currencies = this.state.currencies;
		return (
			<div>
				<div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								<h4 className="modal-title" id="myModalLabel">Добавить валюту</h4>
							</div>
							<div className="modal-body">
								<select className="selectpicker" ref="currencySelect">
									{
										currencies.map(function(currency, key) {
											// Переводим массив в строку
											var currencyData = JSON.stringify(currency);
											return <option value={currencyData} key={key}>{currency.name}</option>;
										})
									}
								</select>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" onClick={this.addCurrency}>Добавить</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = CurrencyModal;
