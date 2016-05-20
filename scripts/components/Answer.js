/* Answer
  <Answer />
*/
import React from 'react'


var Answer = React.createClass({
	getInitialState : function(){
		return {
			disabled : false
		}
	},
	calcScore : function(){
		if (this.props.details.correct === true){
			this.props.addScore()
			this.playCorrectSound()
		} else {
			this.props.subtractScore()
			this.playIncorrectSound()
		}
	},
	disable : function(){
		this.setState({
			disabled :true
		});
	},
	playCorrectSound : function(){
		var sound = new Audio('../sounds/correct.wav');
		sound.play();
	},
	playIncorrectSound : function(){
		var sound = new Audio('../sounds/wrong.wav');
		sound.play();
	},
	handleClick : function(){
		this.calcScore();
		this.disable();
	},
	render : function(){
		var details = this.props.details;
		var btnClass = 'answer'
		if(this.state.disabled && details.correct) btnClass += ' correct'
		else if(this.state.disabled && details.correct == false) btnClass += ' false animated shake' 
		return(
				<button className={btnClass} disabled={this.state.disabled} onClick={this.handleClick}>{details.text}</button>
		)
	}
});

export default Answer