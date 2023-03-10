const PortfolioItem = ({ project, handleClick, index }) => {
	return (
		<div className="bg-slate-800 rounded-lg overflow-hidden">
			<img
				src={project.imageUrl}
				alt="work"
				className="w-full h-36 md:h-48 object-cover"
			/>
			<div className="w-full p-5 text-gray-300 ">
				<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
					{project.title}
				</h3>
				<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
					{project.technologies.map((techName, index) => {
						return (
							<span
								key={index}
								className="inline-block px-2 py-1 bg-slate-900 rounded-md">
								{techName}
							</span>
						);
					})}
				</p>
				<p className="flex justify-end">
					<button
						onClick={() => {
							handleClick(index);
						}}
						className="rounded-md bg-slate-700 px-2 py-1 m-3">
						See more
					</button>
				</p>
			</div>
		</div>
	);
};

export default PortfolioItem;
