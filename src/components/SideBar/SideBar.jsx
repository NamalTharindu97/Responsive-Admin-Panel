import React from "react";
import logo from "../../imgs/logo.png";
import "./sidebar.css";

const SideBar = () => {
	return (
		<div className="SiderBar">
			<div className="logo">
				<img alt="logo img" src={logo} />
				<span>
					Sh<span>o</span>ps
				</span>
			</div>
		</div>
	);
};

export default SideBar;
