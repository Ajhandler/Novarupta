var React = require('react');
var ReactDOM = require('react-dom');


/* App
  <App />
*/
var App = React.createClass({
	getInitialState : function(){
		return	{
			quiz : {},
			score : 0
		}
	},
	componentDidMount : function(){
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
  renderQuiz : function(key){
  	return <Quiz subtractScore={this.subtractScore}addScore={this.addScore} key={key} details={this.state.quiz[key]} />
  },
	render : function(){
		return(
			<div>
				<h1>Quiz</h1>
				{Object.keys(this.state.quiz).map(this.renderQuiz)}
			</div>
		)
	},
});

/* Quiz
  <Quiz />
*/
var Quiz = React.createClass({
	renderQuestions : function(key){
		return <Questions {...this.props} key={key} details={this.props.details.answers[key]} />
	},
	render : function(){
		var details = this.props.details;
		return(
			<li>
				<h2>{details.question}</h2>
				{Object.keys(this.props.details.answers).map(this.renderQuestions)}
			</li>
		)
	}
});

/* Questions
  <Questions />
*/
var Questions = React.createClass({
	calcScore : function(){
		if (this.props.details.correct === true){
			this.props.addScore()
		} else {
			this.props.subtractScore()
		}
	},
	render : function(){
		var details = this.props.details; 
		return(
			<button onClick={this.calcScore}>{details.text}</button>
		)
	}
});
ReactDOM.render(<App />, document.querySelector("#main"));