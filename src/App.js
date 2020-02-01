import React from 'react';
import './App.css';

//Networking
import Connection from "./Networking/Connection";

export default class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {

		};
	}

	componentWillMount()
	{
		var conn = new Connection("", 5000);
	}

	componentWillUpdate()
	{

	}

	render()
	{
		return (
			<div className="appContainer">

			</div>
		);
	}
}
