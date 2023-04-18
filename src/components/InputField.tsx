import React from "react";

const InputField = () => {
	return (
		<form className="flex w-[90%] relative items-center">
			<input
				type="text"
				placeholder="enter task"
				className="capitalize w-full rounded-[50px] py-[20px] px-[30px] text-2xl duration-[2s] shadow-[inset_0_0_5px_rgba(0,0,0)] focus:shadow-[0_0_10px_1000px_rgba(0,0,0,.5)] focus:outline-none"
			/>
			<button
				type="submit"
				className="w-[50px] h-[50px] m-3 rounded-full bg-[#2f74c0] absolute right-0 text-white shadow-[0_0_5px_rgba(0,0,0)] transition-all duration-200 hover:bg-[#388ae2] active:scale-[.8] active:shadow-[0_0_5px_black] "
			>
				Go
			</button>
		</form>
	);
};

export default InputField;
