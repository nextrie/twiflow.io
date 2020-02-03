import React from 'react';
import "./AboutCard.css";

export default function AboutCard(props)
{
	return (
		<>
			<div direction={props.direction} className="aboutCardContainer">
				<div className="aboutCardText">
					<h2 className="aboutCardTitle">{props.title}</h2>
					<h3 className="aboutCardDescription secondaryText">{props.description}</h3>
				</div>
				<div direction={props.direction} className="aboutCardIllustrationContainer">
					<img src={props.illustration} alt="cardIllustration" />
				</div>
			</div>
		</>
	);
}
