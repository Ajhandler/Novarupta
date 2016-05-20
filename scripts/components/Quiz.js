/* Quiz (main app)
  <Quiz (main app) />
*/

import React from 'react'
import Header from './Header'
import Question from './Question'
import Next from './Next'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import autobind from 'autobind-decorator'

@autobind
class Quiz extends React.Component{
	constructor(){
		super();
		this.state =	{
			quiz : {},
			score : 0,
			currentQuestion: 0
		}
	}
	componentWillMount(){
		this.setState({
      quiz : require('../sample-quiz')
    });
  }
  addScore(){
  	this.state.score += 25
  	this.setState({score: this.state.score})
  }
  subtractScore(){
  	this.state.score -= 10
  	this.setState({score : this.state.score})
  }
  currentQuestion(){
  	var key = Object.keys(this.state.quiz)[this.state.currentQuestion]
  	return key

  }
  nextQuestion(){
  	this.setState({
  		currentQuestion : this.state.currentQuestion + 1
  	})
  }
  renderQuiz(key){
  	return <Question subtractScore={this.subtractScore} addScore={this.addScore} key={key} details={this.state.quiz[key]} />
  }
	render(){
		var questions = this.state.currentQuestion
		return(
			<div>
				<Header score={this.state.score} />
				<div className="container">
				<CSSTransitionGroup 
				className="questions" 
				component="ul"
				transitionName="question"
				transitionEnterTimeout={1500}
				transitionLeaveTimeout={1500}
				>
					{this.renderQuiz(this.currentQuestion())}
					<Next nextQuestion={this.nextQuestion} />
				</CSSTransitionGroup>
				</div>
			</div>
		)
	}
};

export default 	Quiz