var React = require('react');
var $     = require('jquery');

var NewComponent = React.createClass({
	render: function() {
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
		);
	}
});

module.exports = NewComponent;