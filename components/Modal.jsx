import projects from "../data/projects";
const Modal = ({ index, setShowModal }) => {
	const project = projects[index];
	return (
		<>
			<div class="modal bg-gray-600 bg-opacity-60 fixed w-full h-full top-0 left-0 flex items-center justify-center z-10">
				<div class=" bg-slate-900 text-gray-300 w-11/12 md:max-w-4xl mx-auto rounded shadow-lg z-40 overflow-y-auto">
					<div className="w-full p-2 flex justify-end">
						<button
							onClick={() => {
								setShowModal(false);
							}}
							className="right-0">
							<svg
								fill="none"
								stroke="white"
								stroke-width="1.5"
								width="25px"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>
					<div class="m-2 modal-content py-4 text-left px-6 z-50 flex flex-col md:flex-row">
						<div className="w-11/12 md:w-1/2 px-2 mx-auto my-2">
							<iframe
								className="w-full h-52 md:60 rounded-2xl"
								src={`https://www.youtube.com/embed/${project.embedded}?modestbranding=1&rel=0`}
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen="true"></iframe>
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
							<p className="text-justify pt-2 md:pt-0 px-1 text-sm md:text-base">
								{project.description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;