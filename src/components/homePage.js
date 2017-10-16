"use strict";

var React = require('react');

var Home = React.createClass({
	render: function(){
		return (
			<div className="container">
			<div className="row">
			<div className="col-md-12">
			<div className="jumbotron">
			<h1>hola esto es una vista react</h1>
			</div>
			</div>	
			</div>
			</div>		
		);
	}
});

module.exports = Home;
