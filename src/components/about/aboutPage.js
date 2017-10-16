"use strict";

var React = require('react');

var About = React.createClass({
	render: function(){
		return (
			<div className="container">
			 	<div className="row">
				 	<div className="col-md-12">
						<h1>About</h1>
						<p>
							Esto es routing simple con react 0.13.3
							<ul>
								<li>React</li>
								<li>React routing</li>
								<li>Flux</li>
								<li>Node</li>
								<li>Gulp</li>
								<li>Browserify</li>
								<li>Bootstrap</li>
							</ul>
						</p>
					</div>	
				</div>
			</div>	
		);
	}
});

module.exports = About;