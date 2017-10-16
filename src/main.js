$ = jQuery = require('jquery');
//cargamos bootstrap 3.3.5
require('bootstrap');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/headerPage');
var Authors = require('./components/authors/authorsPage');

(function(win){
	"use strict";
	var App = React.createClass({
		render: function(){
			var Child;
			switch(this.props.route){
				case 'about':
						Child = About;
					break;

				case 'authors':
					Child = Authors;
					break;	

				default: 
						Child = Home;
					break;
			}

			return (
					<div>
						<Header/>
				 		<Child/>
					</div>
			);
		}
	});

	function render(){
		var route = window.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}

	window.addEventListener('hashchange', render);
	render();
})(window);


