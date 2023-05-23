import React from "react";
import logo from "../../imgs/logo.png";
import "./sidebar.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";

const SideBar = () => {
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
				<div className="menu-Item">
					<div>
						<UilReact />
					</div>
					<span>Dashboard</span>
				</div>
				<div className="menu-Item">
					<div>
						<UilReact />
					</div>
					<span>Dashboard</span>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
