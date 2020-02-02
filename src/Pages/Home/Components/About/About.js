import React from 'react';
import "./About.css";
import "./About_Responsive.css";

//Components
import AboutCard from "./Components/AboutCard";

//Images
import EasyLogo from "./logo/easy.png";
import Wave from "./imgs/wave.svg";

export default class About extends React.Component
{
	render()
	{
		return (
			<div id="About" className="aboutContainer">
			<img className="sectionWave" src={Wave} alt="wave" />
				<h1 className="aboutTitle">Why TwiFlow ?</h1>
				<div className="aboutCards">
					<AboutCard
						illustration={EasyLogo}
						title="Easy process"
						description="TwiFlow takes care of all the complicated tasks, just login to your dashboard and start managing your accounts"
					/>
					<AboutCard
						illustration={EasyLogo}
						title="Easy process"
						description="TwiFlow takes care of all the complicated tasks, just login to your dashboard and start managing your accounts"
					/>
					<AboutCard
						illustration={EasyLogo}
						title="Easy process"
						description="TwiFlow takes care of all the complicated tasks, just login to your dashboard and start managing your accounts"
					/>
				</div>
			</div>
		);
	}
}
