import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import "./sidebar.css";
import { SiderBarData } from "../../data/Data";

const SideBar = () => {
	const [selected, setSelected] = useState(0);

	return (
		<div className="SiderBar">
			{/* logo */}
			<div className="logo">
				<img alt="logo img" src={logo} />
				<span>
					Sh<span>o</span>ps
				</span>
			</div>
			{/* menu */}
			<div className="menu">
				{SiderBarData.map((item, index) => {
					return (
						<div
							className={
								selected === index
									? "menu-Item active"
									: "menu-Item"
							}
							key={index}
							onClick={() => setSelected(index)}
						>
							<item.icon />
							<span>{item.heading}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SideBar;
