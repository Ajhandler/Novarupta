/* Question
  <Question />
*/
import React from 'react'
import Answer from './Answer'

var Question = React.createClass({
	renderAnswers : function(key){
		return <Answer {...this.props} key={key} details={this.props.details.answers[key]} />
	},
	render : function(){
		var details = this.props.details;
		return(
				<div className="row">
				<li className="question col-md-8 col-md-offset-2">
					<h2>{details.question}</h2>
					<div className="row">
						<div className="answers col-md-12">
							{Object.keys(this.props.details.answers).map(this.renderAnswers)}
						</div>
					</div>
				</li>
				</div>
		)
	}
});

export default Question