import React from 'react';
import "./Home.css";
import "./Home_Responsive.css";

//Components
import NavBar from "./Components/NavBar/NavBar";

export default class Home extends React.Component
{
	render()
	{
		return (
			<>
				<NavBar />
				<div className="homeContainer">
					<div className="homeContent">

					</div>
				</div>
			</>
		);
	}
}
