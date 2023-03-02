import projects from "../data/projects";
const Modal = ({ index, setShowModal }) => {
	const project = projects[index];
	return (
		<>
			<div className="modal bg-gray-600 bg-opacity-60 fixed w-full h-full top-0 left-0 flex items-center justify-center z-10">
				<div className=" bg-slate-900 text-gray-300 w-11/12 h-screen md:h-auto  md:max-w-4xl mx-auto rounded shadow-lg z-40 overflow-y-auto">
					<div className="w-full flex justify-end">
						<button
							className="m-2 mt-3"
							onClick={() => {
								setShowModal(false);
							}}>
							<svg
								fill="none"
								stroke="white"
								strokeWidth="1.5"
								width="25px"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>
					<div className="m-2 modal-content py-4 text-left px-6 z-50 flex flex-col md:flex-row">
						<div className="w-11/12 md:w-1/2 px-2 mx-auto my-2">
							<iframe
								className="w-full h-52 md:60 rounded-2xl"
								src={`https://www.youtube.com/embed/${project.embedded}?modestbranding=1&rel=0`}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen={true}></iframe>
						</div>
						<div className="w-full md:w-1/2 px-2 mx-auto my-2">
							<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
								{project.title}
							</h3>
							<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
								{project.technologies.map((techName, index) => {
									return (
										<span
											key={index}
											className="inline-block px-2 py-1 bg-slate-600 rounded-md">
											{techName}
										</span>
									);
								})}
							</p>
							<p className="text-justify text-base pt-2 md:pt-0 px-1">
								{project.description}
							</p>
							<p className="flex justify-end">
								<a
									href={project.repositoryUrl}
									className="button"
									target="_blank"
									rel="noreferrer">
									<button className="rounded-md bg-slate-600 hover:bg-slate-700 px-2 py-1 m-3">
										Check Repository
									</button>
								</a>
								<a
									href={project.liveDemoUrl}
									className="button"
									target="_blank"
									rel="noreferrer">
									<button className="rounded-md bg-indigo-600 hover:bg-indigo-700  px-2 py-1 m-3">
										Live Demo
									</button>
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
