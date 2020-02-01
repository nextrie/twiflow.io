import React from 'react';
import './App.css';

//Pages
import Home from "./Pages/Home/Home.js";

//redux
import { connect } from "react-redux";

//Networking
import { initSocketConnection } from "./Networking/ConnectionActions";

class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.changePage = this.changePage.bind(this);
		this.state = {
			currentPage: null,
		};
	}

	changePage(pageComponent)
	{
		if (pageComponent)
			if (pageComponent !== this.state.currentPage)
				this.setState({currentPage: pageComponent});
	}

	componentDidMount()
	{
		this.props.initSocketConnection();
	}

	render()
	{
		return (
			<div className="appContainer">
				{this.state.currentPage ? this.state.currentPage : <Home changePage={this.changePage} />}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		networkConnection: state.networkConnection
	};
};

const mapDispatchToProps = dispatch => {
	return {
		initSocketConnection: () => dispatch(initSocketConnection())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
