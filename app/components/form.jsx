var React = require('react');
var $ = require('jquery');
// var CurrencyModal = require('./currencyModal.jsx');



var NewComponent = React.createClass({
	addCurrency: function() {
		$('.modal-trigger').modal({
			show: 'true'
		});
	},
	render: function() {
		return (
			<div className="col-md-7">
				<h1>Прогноз сбережений</h1>

				<table>
					<tr>
						<td>Сбережения</td>
						<td>В моей валюте, <i className="fa fa-rub"></i></td>
						<td>Ставки вкладов</td>
					</tr>
				</table>
				<a className="btn btn-primary btn-sm modal-trigger" href="#" onClick={this.addCurrency} data-toggle="modal" data-target="#myModal"><i className="fa fa-plus"></i> Валюта</a>
			</div>
		);
	}
});

module.exports = NewComponent;