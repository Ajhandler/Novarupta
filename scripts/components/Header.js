/* Header
  <Header />
*/
import React from 'react'
import Score from './Score'

class Header extends React.Component{
	render(){
		return (
			<nav className="navbar navbar-dark bg-inverse navbar-fixed-top">
				<h3 className="navbar-brand">
					<Score score={this.props.score}/>
				</h3>
			</nav>
		)
	}
}
export default Header