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
  renderQuiz : function(key){
  	return <Quiz key={key} details={this.state.quiz[key]} />
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
	render : function(){
		var details = this.props.details;
		console.log(details.question)
		return(
			<li>
				<h2>{details.question}</h2>
				<button></button>
			</li>
		)
	}
});

ReactDOM.render(<App />, document.querySelector("#main"));