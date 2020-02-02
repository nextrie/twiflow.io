import React from 'react';
import "./AboutCard.css";

export default function AboutCard(props)
{
	return (
		<div className="aboutCardContainer">
			<div className="aboutCardIllustrationContainer">
				<img src={props.illustration} alt="cardIllustration" />
			</div>
			<h2 className="aboutCardTitle">{props.title}</h2>
			<h3 className="aboutCardDescription secondaryText">{props.description}</h3>
		</div>
	);
}
