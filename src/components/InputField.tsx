import React from "react";

const InputField = () => {
	return (
		<form className="flex w-[90%] relative items-center">
			<input
				type="text"
				placeholder="enter task"
				className="capitalize w-full rounded-[50px] py-[20px] px-[30px] text-2xl duration-[2s] shadow-[inset_0_0_5px_rgba(0,0,0)] focus:shadow-[0_0_10px_1000px_rgba(0,0,0,.5)] focus:outline-none"
			/>
			<button type="submit">Go</button>
		</form>
	);
};

export default InputField;
