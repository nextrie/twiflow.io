import React from 'react';
import "./About.css";
import "./About_Responsive.css";

//Components
import AboutCard from "./Components/AboutCard";

//Images

export default class About extends React.Component
{
	render()
	{
		return (
			<div id="About" className="aboutContainer">
				<div className="aboutCards">
					<AboutCard
						illustration={null}
						title={null}
						description={null}
					/>
					<AboutCard
						illustration={null}
						title={null}
						description={null}
					/>
					<AboutCard
						illustration={null}
						title={null}
						description={null}
					/>
				</div>
			</div>
		);
	}
}
