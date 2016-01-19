var React = require('react');

var CurrencyModal = React.createClass({
	getInitialState: function() {
		return {
			currencies:[
				{
					code: "rub",
					name: 'Рубль'
				},
				{
					code: 'dollar',
					name: 'Доллар'
				},
				{
					code: 'euro',
					name: 'Евро'
				}]
		}
	},

	addCurrency: function() {
		console.log(this.refs.currencySelect.value);
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
											return <option value={currency.code} key={key}>{currency.name}</option>;
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
