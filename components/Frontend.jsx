import React from "react";
import skillsList from "../data/skillsList";
const Frontend = () => {
	return (
		<div className=" bg-slate-800 hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5 mb-5">
			<div>
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					viewBox="0 0 24 24"
					height="25px"
					width="25px"
					xmlns="http://www.w3.org/2000/svg">
					<path fill="none" d="M0 0h24v24H0z"></path>
					<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path>
				</svg>
				<h2 className="py-3 pt-4 font-semibold">Front End</h2>
			</div>
			<div className="flex flex-row justify-between">
				{skillsList.frontend.map((img) => (
					<img key={img} width="40px" height="40px" src={img} />
				))}
			</div>
		</div>
	);
};

export default Frontend;
