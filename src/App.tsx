import React from "react";
import "./App.css";
import InputField from "./components/InputField";

const App: React.FC = () => {
	return (
		<div className="w-full h-[100vh] flex flex-col items-center bg-[#2f74c0] font-Neu">
			<header className="uppercase text-white text-[40px] my-[30px] z-10 ">
				Taskify
			</header>
			<InputField />
		</div>
	);
};

export default App;
