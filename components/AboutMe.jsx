const AboutMe = () => {
	return (
		<div id="about" className="mb-8">
			<h2 className="text-indigo-500 flex flex-row text-2xl md:text-3xl mb-1 md:mb-3 font-bold pb-3">
				About Me
			</h2>
			<div className="w-full flex md:flex-row flex-col-reverse justify-between align-middle">
				<span className=" text-lg md:pr-7 md:w-1/2 my-auto pb-7 text-justify">
					<p>
						Hello my name is Mohammad Osssman Abdul Rauf I'm self taught
						full-stack developer, I've developed many types of front-end and
						full-stack applications. I'm passionate about technology programming
						and building applications from ground up.
					</p>
					<p>
						Since kid I'm in love with technology and almost 3 years ago my
						interest in programming started after many hours alone in my room
						learning and trying I felt my heart in the right place.
					</p>

					<p>
						Currently I'm studying Computer Engenering and telecommunications as
						my major and soon to be graduated, looking for new job or freelance
						opurtunities.
					</p>

					<div className="flex justify-evenly align-baseline pt-3">
						<p className="pt-3 text-lg">Get in touch:</p>
						<span className="w-1/2 flex flex-row justify-end">
							<span className="w-12 md:w-14 p-1 md:p-2 rounded-full bg-gray-300 mx-2">
								<a href="https://github.com/OssmanRauf" target="_blank">
									<img
										className="w-full h-full"
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
									/>
								</a>
							</span>
							<span className="w-12 md:w-14 p-1 md:p-2 rounded-full bg-gray-300 mx-2">
								<a
									href="https://www.linkedin.com/in/ossmanrauf/"
									target="_blank">
									<img
										className="w-full h-full"
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
									/>
								</a>
							</span>
							<span className="w-12 md:w-14 p-1 md:p-2 rounded-full bg-gray-300 mx-2">
								<a target="_blank" href="https://wa.me/258872222118">
									<svg
										className="w-full"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24">
										<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
									</svg>
								</a>
							</span>
						</span>
					</div>
				</span>

				<div className="w-full md:w-1/2 flex justify-center mb-5 md:justify-end">
					<img className="md:w-96 w-72 " src="assets/avatar.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
