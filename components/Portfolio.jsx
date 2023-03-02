import PortfolioItem from "./PortfolioItem";
import projects from "../data/projects";

const Portfolio = ({ handleClick }) => {
	return (
		<div id="portfolio">
			<h2 className="text-indigo-500 flex flex-row text-2xl md:text-3xl mb-1 md:mb-3 font-bold pb-3">
				My Recent Work
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-7">
				{projects.map((project, index) => (
					<PortfolioItem
						handleClick={handleClick}
						key={index}
						index={index}
						project={project}
					/>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
