/* Score
  <Score />
*/

import React from 'react'

class Score extends React.Component{
	render (){
		return(
				<div>Score:
				  <span>{this.props.score}</span>
				</div>
		)
	}
}

export default Score