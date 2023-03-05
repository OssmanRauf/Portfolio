const AboutMe = () => {
	return (
		<div id="about" className="mb-8">
			<h2 className="text-indigo-500 flex flex-row text-2xl md:text-3xl mb-1 md:mb-3 font-bold pb-3">
				About Me
			</h2>
			<div className="w-full flex md:flex-row flex-col-reverse justify-between align-middle">
				<span className=" text-lg md:pr-7 md:w-1/2 my-auto pb-7 text-justify">
					<p>
						Hello my name is Mohammad Osssman Abdul Rauf I&#39;m self taught
						full-stack developer, I&#39;ve developed many types of front-end and
						full-stack applications. I&#39;m passionate about technology
						programming and building applications from ground up.
					</p>
					<p>
						Since kid I&#39;m in love with technology and almost 3 years ago my
						interest in programming started after many hours alone in my room
						learning and trying I felt my heart in the right place.
					</p>

					<p>
						Currently I&#39;m studying Computer Engenering and
						telecommunications as my major and soon to be graduated, looking for
						new job or freelance opurtunities.
					</p>

					<div className="flex justify-evenly align-baseline pt-3">
						<p className="pt-3 text-lg">Get in touch:</p>
						<span className="w-1/2 flex flex-row justify-between">
							<a
								href="https://github.com/OssmanRauf"
								rel="noreferrer"
								target="_blank">
								<img
									alt="github"
									className="w-8 h-8 md:w-10 md:h-10"
									src="/assets/github.svg"
								/>
							</a>

							<a
								href="https://www.linkedin.com/in/ossmanrauf/"
								target="_blank"
								rel="noreferrer">
								<img
									alt="linkedin"
									className="w-8 h-8 md:w-10 md:h-10"
									src="/assets/linkedin.svg"
								/>
							</a>

							<a
								target="_blank"
								rel="noreferrer"
								href="https://wa.me/258872222118">
								<img
									alt="whasapp"
									className="w-8 h-8 md:w-10 md:h-10"
									src="/assets/whatsapp.svg"
								/>
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="mailto:ossmanrauf8@gmail.com">
								<img
									alt="email"
									className="w-8 h-8 md:w-10 md:h-10"
									src="/assets/mail.svg"
								/>
							</a>
						</span>
					</div>
				</span>

				<div className="w-full md:w-1/2 flex justify-center mb-5 md:justify-end">
					<img className="md:w-96 w-72 " src="assets/avatar.png" alt="avatar" />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
