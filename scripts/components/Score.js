/* Score
  <Score />
*/

import React from 'react'

var Score = React.createClass({
	render : function(){
		return(
				<div>Score:
				  <span>{this.props.score}</span>
				</div>
		)
	}
});

export default Score