import Typewriter from "typewriter-effect";
const Introduction = () => {
	return (
		<>
			<div id="home" className="w-full flex justify-center pt-12 pb-2">
				<div className="flex flex-row text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-500 font-semibold">
					Hello I&#39;m&nbsp;
					<Typewriter
						options={{
							strings: ["Ossman Rauf", "A Programmer", "Developer"],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
			</div>
			<div className="text-md w-10/12 m-auto text-justify font-medium">
				<p className="text-center">Software Developer</p>

				<div className="flex justify-evenly w-full">
					<a
						href="#portfolio"
						className="inline-block px-8 py-3 my-5 border border-transparent text-sm
					 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-base md:w-52 w-50 text-center self-center">
						See my Work
					</a>
					<a
						href="https://drive.google.com/file/d/1E8kaE8-GZ_R9S-GjnCP5WdMAMBme2euQ/view?usp=sharing"
						rel="noopener noreferrer"
						target="_blank"
						className="inline-block px-8 py-3 my-5 border border-transparent md:text-base text-smfont-medium rounded-md text-white bg-slate-700 hover:bg-slate-800 md:w-52  w-50 text-center self-center">
						Resume
					</a>
				</div>
			</div>
		</>
	);
};

export default Introduction;
