import React from 'react';
import "./Home.css";
import "./Home_Responsive.css";

//Components
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";

export default class Home extends React.Component
{
	render()
	{
		return (
			<>
				<NavBar />
				<div className="homeContainer">
					<div className="homeContent">
						<Header />
					</div>
					<About />

				</div>
			</>
		);
	}
}
