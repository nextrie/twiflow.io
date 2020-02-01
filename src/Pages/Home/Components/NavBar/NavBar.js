import React from 'react';
import "./NavBar.css";
import "./NavBar_Responsive.css";

//Images
import Logo from "../../../../imgs/logo/twitter.png";

export default class NavBar extends React.Component
{
	render()
	{
		return (
			<div className="navContainer">
				<div className="navContent">
					<div className="logo">
						<img className="projectLogo" src={Logo} alt="logo" />
						<h2 className="coloredText">TwiFlow</h2>
					</div>
					<div className="navActionContainer">
						<a>About</a>
						<a>Features</a>
						<a>Pricing</a>
						<a>Login</a>
					</div>
				</div>
			</div>
		);
	}
}
