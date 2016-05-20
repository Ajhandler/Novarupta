/* Next
  <Next />
*/
import React from 'react'

class Next extends React.Component{
	render(){
		return(
			<button className="next" onClick={this.props.nextQuestion}>Next</button>
		)
	}
}

export default Next