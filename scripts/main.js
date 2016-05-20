var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var CSSTransitionGroup = require('react-addons-css-transition-group');


/* App
  <App />
*/
var App = React.createClass({
	getInitialState : function(){
		return	{
			quiz : {},
			score : 0,
			currentQuestion: 0
		}
	},
	componentWillMount : function(){
		this.setState({
      quiz : require('./sample-quiz')
    });
  },
  addScore : function(){
  	this.state.score += 25
  	this.setState({score: this.state.score})
  },
  subtractScore : function(){
  	this.state.score -= 10
  	this.setState({score : this.state.score})
  },
  currentQuestion : function(){
  	var key = Object.keys(this.state.quiz)[this.state.currentQuestion]
  	return key

  },
  nextQuestion : function(){
  	this.setState({
  		currentQuestion : this.state.currentQuestion + 1
  	})
  },
  renderQuiz : function(key){
  	return <Quiz subtractScore={this.subtractScore} addScore={this.addScore} key={key} details={this.state.quiz[key]} />
  },
	render : function(){
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
	},
});

/* Header
  <Header />
*/

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

/* Quiz
  <Quiz />
*/
var Quiz = React.createClass({
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

/* Answer
  <Answer />
*/
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

/* Score
  <Score />
*/
var Score = React.createClass({
	render : function(){
		return(
				<div>Score:
				  <span>{this.props.score}</span>
				</div>
		)
	}
});

/* Next
  <Next />
*/
var Next = React.createClass({
	render : function(){
		return(
			<button className="next" onClick={this.props.nextQuestion}>Next</button>
		)
	}
})



ReactDOM.render(<App />, document.querySelector("#main"));