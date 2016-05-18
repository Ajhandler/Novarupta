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
	render : function(){
		return <h1>Hello World!</h1>
	},
});


ReactDOM.render(<App />, document.querySelector("#main"));