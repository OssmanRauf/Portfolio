import React from "react";
import skillsList from "../data/skillsList";
const Backend = () => {
	return (
		<div className=" bg-slate-800 hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5 mb-5">
			<div>
				<svg
					className="font-semibold"
					height="25px"
					width="25px"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true">
					<path
						clip-rule="evenodd"
						fill-rule="evenodd"
						d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"></path>
				</svg>
				<h2 className="py-3 pt-4 font-semibold">Back End</h2>
			</div>
			<div className="flex flex-row justify-between">
				{skillsList.backend.map((img) => (
					<img key={img} width="40px" height="40px" src={img} />
				))}
			</div>
		</div>
	);
};

export default Backend;
