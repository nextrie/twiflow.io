import React from 'react';
import "./AboutCard.css";

export default function AboutCard(props)
{
	return (
		<div className="aboutCardContainer">
			<div className="aboutCardIllustrationContainer">
				<img src={props.illustration} alt="cardIllustration" />
			</div>
		</div>
	);
}
