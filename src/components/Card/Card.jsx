import React, { useState } from "react";
import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";

const Card = (props) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<AnimateSharedLayout>
			{expanded ? (
				<ExpandedCard
					param={props}
					setExpanded={() => setExpanded(false)}
				/>
			) : (
				<CompactCard
					param={props}
					setExpanded={() => setExpanded(true)}
				/>
			)}
		</AnimateSharedLayout>
	);
};

const CompactCard = ({ param, setExpanded }) => {
	const Png = param.png;
	return (
		<div
			className="CompactCard"
			style={{
				background: param.color.backGround,
				boxShadow: param.color.boxShadow,
			}}
			onClick={setExpanded}
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

const ExpandedCard = ({ param, setExpanded }) => {
	return (
		<div
			className="ExpandedCard"
			style={{
				background: param.color.backGround,
				boxShadow: param.color.boxShadow,
			}}
		>
			<div>
				<UilReact onClick={setExpanded} />
			</div>
			<span>{param.title}</span>
			<div className="chartContainer">chart</div>
			<span>Last 24 Hours</span>
		</div>
	);
};

export default Card;
