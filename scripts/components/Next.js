/* Next
  <Next />
*/
import React from 'react'
var Next = React.createClass({
	render : function(){
		return(
			<button className="next" onClick={this.props.nextQuestion}>Next</button>
		)
	}
});

export default Next