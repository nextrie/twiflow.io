import React from 'react';
import './App.css';

//Pages
import Home from "./Pages/Home/Home.js";

//redux
import { connect } from 'react-redux';

export default class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			currentPage: null
		};
	}

	componentWillMount()
	{
		//this.setState({conn: new Connection("http://localhost", 5000)});
	}

	componentWillUpdate()
	{

	}

	render()
	{
		return (
			<div className="appContainer">
				{this.state.currentPage ? this.state.currentPage : <Home />}
			</div>
		);
	}
}
