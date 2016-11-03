import React from 'react';
import ReactDOM from 'react-dom';

const Greeting = React.createClass({
	render(){
		return (
			<div>Hello world</div>
			)
	}
})
ReactDOM.render(
  <Greeting/>,
  document.getElementById('root')
)
