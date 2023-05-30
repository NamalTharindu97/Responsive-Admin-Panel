import UilReact from "@iconscout/react-unicons/icons/uil-react";

export const SiderBarData = [
	{
		icon: UilReact,
		heading: "Dashboard",
	},
	{
		icon: UilReact,
		heading: "Orders",
	},
	{
		icon: UilReact,
		heading: "Customers",
	},
	{
		icon: UilReact,
		heading: "Products",
	},
	{
		icon: UilReact,
		heading: "Analytics",
	},
	{
		icon: UilReact,
		heading: "LogOut",
	},
];

export const CardData = [
	{
		title: "Sales",
		color: {
			backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
			boxShadow: "0px 10px 20px 0px #e0c6f5",
		},
		barValue: "70",
		value: "25,970",
		png: UilReact,
		series: [
			{
				name: "sales",
				data: [10, 100, 50, 70, 80, 30, 40],
			},
		],
	},

	{
		title: "Revenue",
		color: {
			backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
			boxShadow: "0px 10px 20px 0px #FDC0C7",
		},
		barValue: 80,
		value: "14,270",
		png: UilReact,
		series: [
			{
				name: "Revenue",
				data: [10, 100, 50, 70, 80, 30, 40],
			},
		],
	},

	{
		title: "Expenses",
		color: {
			backGround:
				"linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
			boxShadow: "0px 10px 20px 0px #F9D59B",
		},
		barValue: "60",
		value: "4,970",
		png: UilReact,
		series: [
			{
				name: "Expenses",
				data: [10, 25, 15, 30, 12, 15, 20],
			},
		],
	},
];
