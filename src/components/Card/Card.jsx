import React, { useState } from "react";
import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<AnimateSharedLayout>
			{expanded ? <ExpandedCard /> : <CompactCard param={props} />}
		</AnimateSharedLayout>
	);
};

const CompactCard = ({ param }) => {
	const Png = param.png;
	return (
		<div
			className="CompactCard"
			style={{
				background: param.color.backGround,
				boxShadow: param.color.boxShadow,
			}}
		>
			<div className="radialBar">
				<CircularProgressbar
					value={param.barValue}
					text={`${param.barValue}%`}
				/>
				<span>{param.title}</span>
			</div>
			<div className="details">
				<Png />
				<span>${param.value}</span>
				<span>Last 24 Hours</span>
			</div>
		</div>
	);
};

const ExpandedCard = () => {};

export default Card;
