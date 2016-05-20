var React = require('react');
var ReactDOM = require('react-dom');


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
  	});
  },
  renderQuiz : function(key){
  	return <Question subtractScore={this.subtractScore} addScore={this.addScore} key={key} details={this.state.quiz[key]} />
  },
	render : function(){
		var questions = this.state.currentQuestion
		return(
			<div>
				<Header score={this.state.score} />
				<div className="container">
				<ul className="questions">
					{this.renderQuiz(this.currentQuestion())}
					<Next nextQuestion={this.nextQuestion} />
				</ul>
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
		} else {
			this.props.subtractScore()
		}
	},
	disable : function(){
		this.setState({
			disabled :true
		});
	},
	handleClick : function(){
		this.calcScore();
		this.disable();
	},
	render : function(){
		var details = this.props.details; 
		return(
				<button className="answer" disabled={this.state.disabled} onClick={this.handleClick}>{details.text}</button>
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