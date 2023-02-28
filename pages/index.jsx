import Introduction from "../components/Introduction";
import Myskills from "../components/Myskills";
import Portfolio from "../components/Portfolio";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
export default function Home() {
	return (
		<div className="scroll-smooth bg-slate-900 text-gray-300 w-full">
			<NavBar />
			<div className="max-w-5xl w-11/12 mx-auto">
				<Introduction />
				<Myskills />
				<Portfolio />
				<AboutMe />
				<Footer />
			</div>
		</div>
	);
}
