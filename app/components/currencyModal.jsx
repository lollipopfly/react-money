var React = require('react');

var CurrencyModal = React.createClass({
	getInitialState: function() {
		 return {

		 };
	},

render: function() {
		return (
			<div>
				<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 className="modal-title" id="myModalLabel">Добавить валюту</h4>
				      </div>
				      <div className="modal-body">

				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-primary">Добавить</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
});

module.exports = CurrencyModal;
