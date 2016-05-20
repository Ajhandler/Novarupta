/* Header
  <Header />
*/
import React from 'react'
import Score from './Score'
var Header = React.createClass({
	render : function(){
		return (
			<nav className="navbar navbar-dark bg-inverse navbar-fixed-top">
				<h3 className="navbar-brand">
					<Score score={this.props.score}/>
				</h3>
			</nav>
		)
	}
});

export default Header