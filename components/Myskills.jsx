import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
const Myskills = () => {
	return (
		<div id="skills">
			<h2 className="text-indigo-500 flex flex-row text-2xl md:text-3xl mb-1 md:mb-3 font-bold pb-3">
				My Skills
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				<Frontend />
				<Backend />
				<Tools />
			</div>
		</div>
	);
};
export default Myskills;
