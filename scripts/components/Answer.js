/* Answer
  <Answer />
*/
import React from 'react'
import autobind from 'autobind-decorator'

@autobind
class Answer extends React.Component{
	constructor(){
		super();
		this.state = {
			disabled : false
		}
	}
	calcScore(){
		if (this.props.details.correct === true){
			this.props.addScore()
			this.playCorrectSound()
		} else {
			this.props.subtractScore()
			this.playIncorrectSound()
		}
	}
	disable (){
		this.setState({
			disabled :true
		});
	}
	playCorrectSound(){
		var sound = new Audio('../sounds/correct.wav');
		sound.play();
	}
	playIncorrectSound(){
		var sound = new Audio('../sounds/wrong.wav');
		sound.play();
	}
	handleClick(){
		this.calcScore();
		this.disable();
	}
	render(){
		var details = this.props.details;
		var btnClass = 'answer'
		var opts = {}
		if (this.state.disabled){
			opts['disabled'] = 'disabled';
		}
		if(this.state.disabled && details.correct) btnClass += ' correct'
		else if(this.state.disabled && details.correct == false) btnClass += ' false animated shake' 
		return(
				<button className={btnClass} {...opts} onClick={this.handleClick}>{details.text}</button>
		)
	}
};

export default Answer