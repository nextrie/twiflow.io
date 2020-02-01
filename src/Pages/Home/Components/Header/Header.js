import React from 'react';
import "./Header.css";
import "./Header_Responsive.css";

//Images
import HeaderIllustration from "./imgs/headerIllustration.svg";

export default function Header()
{
	return (
		<div className="headerContainer">
			<div className="headerContent">
				<h1 className="headerTitle">
					Lorem ipsum dolores manana.
				</h1>
				<p className="headerDescription">
					Join TwiFlow, follow your twitter accounts evolution, increase your followers.
				</p>
				<div className="headerActions">
					<a href="#" className="headerActionContainer getStarted">
						<div className="headerAction">
							Get Started
						</div>
					</a>
					<a href="#" className="headerActionContainer learnMore">
						<div className="headerAction">
							Learn More
						</div>
					</a>
				</div>
			</div>
			<div className="headerIllustration">
				<img src={HeaderIllustration} alt="headerIllustration" />
			</div>
		</div>
	);
}
