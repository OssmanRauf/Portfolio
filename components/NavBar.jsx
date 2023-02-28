const NavBar = () => {
	return (
		<div className="text-gray-200 bg-slate-800 rounded-b-lg py-3 flex justify-evenly w-full m-auto align-middle md:w-8/12">
			<a
				href="#home"
				className="hover:text-gray-300 text-base md:text-lg underline py-1">
				Home
			</a>
			<a
				href="#skills"
				className="hover:text-gray-300 text-base md:text-lg underline py-1">
				Skills
			</a>
			<a
				href="#portfolio"
				className="hover:text-gray-300 text-base md:text-lg underline py-1">
				Portfolio
			</a>
			<a
				href="#about"
				className="hover:text-gray-300 text-base md:text-lg underline py-1">
				About
			</a>
			<a
				target="_blank"
				href="https://www.coding4life.org/profile/OssmanRauf"
				className="text-base md:text-lg underline py-1">
				Blog
			</a>
		</div>
	);
};

export default NavBar;
